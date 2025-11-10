import React from "react";
import ReactMarkdown from "react-markdown";

export default function Recipe(props) {
  return (
    <section className="recipe-container">
      <h2 className="recipe-container-recommend">ForkCast Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
