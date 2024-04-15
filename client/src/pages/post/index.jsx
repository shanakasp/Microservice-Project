import React from "react";

const Index = () => {
  return (
    <div>
      <form>
        <div className="form-control">
          <label>Title</label>
          <input
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
