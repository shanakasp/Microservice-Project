import axios from "axios"; // Import Axios
import React, { useState } from "react";

const Index = ({ postId }) => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.target.value);
    console.log(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ marginBottom: "20px" }}>New Comment</label>

          <input
            value={content}
            onChange={handleContentChange}
            className="form-control"
            placeholder="Enter comment"
            style={{ marginBottom: "20px" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Index;
