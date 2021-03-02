import { useContext } from "react";
import { ChallengesContext } from "../../Contexts/ChallengesContext";
import styles from "../../styles/components/ExperienceBar.module.css";

export default function ExperienceBar() {
  const { currentExperience, experienceNextToLevel } = useContext(ChallengesContext);
  const percentToNexeLevel = Math.round(currentExperience * 100 / experienceNextToLevel);
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNexeLevel}%` }}>
          <span className={styles.currentExperience} style={{ left: `${percentToNexeLevel}%` }}>
            {currentExperience}
          </span>
        </div>
      </div>
      <span>{experienceNextToLevel} XP</span>
    </header>
  );
}
