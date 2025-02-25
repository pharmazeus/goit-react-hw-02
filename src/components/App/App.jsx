import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [count, setCount] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Description></Description>
      <Options values={count} onUpdate={handleClick}></Options>
      <Feedback></Feedback>
    </div>
  );
}
