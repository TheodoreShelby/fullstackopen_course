import { useState } from "react";

import Feedback from "./Components/Feedback";
import Statistics from "./Components/Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const statistics = {
    good: {
      value: good,
      score: 1,
    },

    neutral: {
      value: neutral,
      score: 0,
    },
    bad: {
      value: bad,
      score: -1,
    },
  };

  const handleGiveFeedback = (type) => () => {
    switch (type) {
      case "good":
        setGood(() => good + 1);
        break;
      case "neutral":
        setNeutral(() => neutral + 1);
        break;
      case "bad":
        setBad(() => bad + 1);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Feedback onGiveFeedback={handleGiveFeedback} />
      <Statistics statistics={statistics} />
    </div>
  );
};

export default App;
