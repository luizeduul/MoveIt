import { createContext, ReactNode, useState } from "react";
import firebase from "firebase";
import { useRouter } from "next/router";
import { auth, realDB } from "../config/firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface UserGithubData {
  uid: string;
  name: string;
  avatar: string;
}

interface AuthContextData {
  isLogged: boolean;
  signUp: () => void;
  user: UserGithubData;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(false);

  const [user, setUser] = useState(null);

  const router = useRouter();

  const userId = () => {
    realDB
      .ref()
      .child("users")
      .child("uid").get()
      .then((response) => {
        console.log(response);
      });
  };

  userId();

  function signUp() {
    const provider = new firebase.auth.GithubAuthProvider();
    provider.addScope("repo_public");

    auth
      .signInWithPopup(provider)
      .then((response) => {
        const { uid, displayName: name, photoURL: avatar } = response.user;

        /*if (userExistsId.uid === uid) {
          router.push("/dashboard");
        }*/

        const userData = {
          uid,
          name,
          avatar,
        };

        function writeUserData() {
          realDB.ref("users/" + userData.uid).set(userData);
        }

        setUser(userData);

        writeUserData();

        setIsLogged(true);
      })
      .catch((error: Error) => {
        console.error("Error in save data", error);
        setIsLogged(false);
        return { error };
      });
  }

  function signIn() {}

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        user,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
