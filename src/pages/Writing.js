import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { title: "Quietly Becoming", slug: "first-post" },
  { title: "Learning to Show Up", slug: "second-post" },
  { title: "Quiet Confidence", slug: "third-post" },
];

function Writing() {
  return (
    <div>
      <h2>Writing</h2>
      
      <ul style={{ listStyle: "none", padding: 0 }}>
  {posts.map((post) => (
    <li key={post.slug} style={{ marginBottom: "12px" }}>
      <Link to={`/writing/${post.slug}`}>{post.title}</Link>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Writing;
