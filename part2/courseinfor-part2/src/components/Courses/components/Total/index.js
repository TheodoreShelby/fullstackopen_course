const Total = ({ sum }) => (
  <p>
    <strong>
      Total of {sum} {sum > 1 ? "excercises" : "exercise"}
    </strong>
  </p>
);

export default Total;
