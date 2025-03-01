import { useEffect, useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedStats = localStorage.getItem("savedStats");
    if (savedStats !== null) {
      return JSON.parse(savedStats);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("savedStats", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedBack = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="container">
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        onFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positiveFeedBack}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}
