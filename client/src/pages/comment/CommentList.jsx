import React, { useEffect, useState } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4001/posts/${postId}/comments`
        );
        const data = await response.json();
        console.log("Received data:", data); // Log received data
        setComments(data || []);
      } catch (error) {
        console.error(`Error fetching comments for postId ${postId}:`, error);
      }
    };

    fetchData();
  }, []);

  // Check if comments is undefined or empty before mapping
  const renderComments =
    comments &&
    comments.map((comment) => {
      return <li key={comment.id}>{comment.content}</li>;
    });

  return (
    <div>
      <ul>{renderComments}</ul>
    </div>
  );
};

export default CommentList;
