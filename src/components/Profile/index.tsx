import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import { AuthContext } from "../../Contexts/AuthContext";
import styles from "../../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.profileContainer}>
      <img src={user.avatar} alt="Luiz Image" />
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level" /> Level {level}
        </p>
      </div>
    </div>
  );
}
