import React from "react";
import SingleQuestion from "./SingleQuestion";
const Questions = ({ questions }) => {
  return (
    <article className="container">
      Questions
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </article>
  );
};

export default Questions;
