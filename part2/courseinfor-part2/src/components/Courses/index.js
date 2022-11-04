import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const Courses = ({ courses }) => (
  <>
    <h1>Web development curriculum</h1>
    {courses.map((course) => (
      <>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total
          sum={course.parts.reduce((prev, next) => prev + next.exercises, 0)}
        />
      </>
    ))}
  </>
);

export default Courses;
