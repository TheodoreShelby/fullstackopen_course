import React from "react";
import NoFeedback from "../NoFeedback";

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td style={{ paddingRight: 10 }}>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ statistics }) => {
  const feedback = Object.values(statistics);

  const feedbackCount = feedback.reduce((prev, next) => prev + next.value, 0);

  const point = feedback.reduce(
    (prev, next) => prev + next.value * next.score,
    0
  );

  const getAverage = () =>
    point !== 0 || feedbackCount !== 0 ? (point / feedbackCount).toFixed(2) : 0;

  const positivePercentage = () =>
    statistics.good.value !== 0 || feedbackCount !== 0
      ? `${((statistics.good.value / feedbackCount) * 100).toFixed(2)} %`
      : `0 %`;

  if (feedbackCount === 0) {
    return <NoFeedback />;
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={statistics.good.value} />
          <StatisticsLine text="Neutral" value={statistics.neutral.value} />
          <StatisticsLine text="Bad" value={statistics.bad.value} />
          <StatisticsLine text="All" value={feedbackCount} />
          <StatisticsLine text="Average" value={getAverage()} />
          <StatisticsLine text="Positive" value={positivePercentage()} />
        </tbody>
      </table>
    </>
  );
};

export default Statistics;
