import React from "react";

const Button = ({ type, onFeedback }) => (
  <button onClick={onFeedback(type)}>{type}</button>
);

const Feedback = ({ onGiveFeedback }) => {
  return (
    <>
      <h2>Give feedback</h2>
      <p>
        <Button type="good" onFeedback={onGiveFeedback} />
        <Button type="neutral" onFeedback={onGiveFeedback} />
        <Button type="bad" onFeedback={onGiveFeedback} />
      </p>
    </>
  );
};

export default Feedback;
