import styles from "./Options.module.css";

export default function Options({ onUpdate, onReset, onFeedback }) {
  return (
    <div className={styles.buttonsContainer}>
      <button
        className={`${styles.button} ${styles.good}`}
        onClick={() => onUpdate("good")}
      >
        Good
      </button>
      <button
        className={`${styles.button} ${styles.neutral}`}
        onClick={() => onUpdate("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${styles.button} ${styles.bad}`}
        onClick={() => onUpdate("bad")}
      >
        Bad
      </button>

      {onFeedback > 0 && (
        <button
          className={`${styles.button} ${styles.reset}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}
