import { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often.",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
];

const Button = ({ text, func }) => (
  <button onClick={func} style={{ margin: 5 }}>
    {text}
  </button>
);

const Section = ({ headingText, quotes, votesCount }) => {
  return (
    <>
      <h2>{headingText}</h2>
      {quotes ? <p>{quotes}</p> : null}
      {votesCount ? <p>has {votesCount} votes</p> : null}
    </>
  );
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [point, setPoint] = useState({});

  const getRandomIndex = () => {
    const randomIndex = Math.random().toFixed(0) * (anecdotes.length - 1);

    setSelected(randomIndex);
  };

  const handleSetVote = () => {
    setPoint({
      ...point,
      [selected]: !point[selected] ? 1 : point[selected] + 1,
    });
  };

  const getHightestVote = () => {
    const keys = Object.keys(point);

    const hightest = keys.reduce((prev, next) => {
      if (point[prev] >= point[next]) {
        return prev;
      } else {
        return next;
      }
    }, "");

    return {
      quote: anecdotes[hightest],
      votes: point[hightest],
    };
  };

  const mostVote = getHightestVote();

  return (
    <>
      <Section
        headingText="Anecdotes of the day"
        quotes={anecdotes[selected]}
        votesCount={point[selected]}
      />
      <p>
        <Button text="vote" func={handleSetVote} />
        <Button text="next anecdotes" func={getRandomIndex} />
      </p>
      <Section
        headingText="Anecdotes with most votes"
        quotes={mostVote.quote}
        votesCount={mostVote.votes}
      />
    </>
  );
};

export default App;
