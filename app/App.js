import { version, Component } from 'inferno';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <h1>{`Inferno ${version}`}</h1>
      </header>
      <p className={styles.Intro}>👋 Hello! </p>
    </div>
  );
}
