import Link from 'next/link';
import styles from "../../styles/components/SideBar.module.css";

export function SideBar() {
  return (
    <div className={styles.container}>
      <img className={styles.logoImg} src="icons/logo.svg" alt="Logo" />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>
          <img src="icons/home.svg" alt="home button image" />
        </button>
        <button className={styles.button} >
          <img src="icons/award.svg" alt="award button image" />
        </button>
      </div>
    </div>
  );
}
