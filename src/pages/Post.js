import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";

function Post() {
  const { slug } = useParams();
  const [content, setContent] = useState("");

  useEffect(() => {
    import(`../posts/${slug}.md`)
      .then((module) => fetch(module.default))
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
  <div style={{ marginTop: "30px" }}>
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

}

export default Post;
