import React, { useEffect, useState } from "react";
import CommentCreate from "../comment/index";
const PostList = () => {
  const [posts, setposts] = useState({});
  const fetchPosts = async () => {
    const response = await fetch("http://localhost:4000/posts");
    const data = await response.json();
    setposts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        key={post.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <CommentCreate postId={post.id}></CommentCreate>
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
