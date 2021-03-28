import firebase from "firebase";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import styles from "../../styles/components/Login.module.css";

export function Login() {
  const { signUp } = useContext(AuthContext);
  function handleLoginWithGithub() {
    signUp();
  }

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          src="/icons/symbol-logo.svg"
          className={styles.imgSymbolLogo}
          alt="symbol icon"
        />
      </div>
      <div className={styles.formContainer}>
        <img
          src="logo-full-white.svg"
          className={styles.imageLogo}
          alt="logo"
        />
        <h1>Bem vindo</h1>
        <p>Faça login com seu Github para começar</p>
        <button onClick={handleLoginWithGithub} className={styles.buttonGithub}>
          <img src="/icons/Github.svg" alt="github logo" />
          Signin with Github
        </button>
      </div>
    </div>
  );
}
