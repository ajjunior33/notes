import React from "react";
import Markdown from "markdown-to-jsx";

function ViewContainer({ text }) {
  return <Markdown>{text}</Markdown>;
}

export default ViewContainer;
