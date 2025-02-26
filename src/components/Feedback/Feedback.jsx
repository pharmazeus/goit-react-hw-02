import styles from "./Feedback.module.css";
export default function Feedback({ feedback, total, positive }) {
  return (
    <div className={styles.feedbackContainer}>
      <h2>Feedback Statistics</h2>
      <p className={styles.feedbackItem}>Good: {feedback.good}</p>
      <p className={styles.feedbackItem}>Neutral: {feedback.neutral}</p>
      <p className={styles.feedbackItem}>Bad: {feedback.bad}</p>
      <p className={styles.feedbackItem}>Total: {total}</p>
      <p className={styles.feedbackItem}>Positive: {positive}%</p>
    </div>
  );
}
