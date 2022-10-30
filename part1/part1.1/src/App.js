const Header = ({ course }) => <h1>{course}</h1>;

const Content = ({ content }) => (
  <>
    {content.map((item) => (
      <p key={item.part}>
        {item.part} {item.exercises}
      </p>
    ))}
  </>
);

const Total = ({ inputNumber }) => {
  const total = inputNumber
    .map((item) => item.exercises)
    .reduce((prev, next) => prev + next, 0);

  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const data = {
    courseName: "Half Stack application development",
    courseContent: [
      { part: "Fundamentals of React", exercises: 10 },
      { part: "Using props to pass data", exercises: 7 },
      { part: "State of a component", exercises: 14 },
    ],
  };

  return (
    <>
      <Header course={data.courseName} />
      <Content content={data.courseContent} />
      <Total inputNumber={data.courseContent} />
    </>
  );
};

export default App;
