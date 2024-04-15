import axios from "axios";
import React, { useState } from "react";
const Index = () => {
  const [title, settitle] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(title);
    await axios.post("http://localhost:4000/posts", {
      title,
    });

    settitle("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Title"
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Index;
