import React from "react";
import { useState } from "react";
// import ReactQuill from "react-quill";
import Editor from "../../Editor";
import "react-quill/dist/quill.snow.css";
function ManagePages() {
  const [content, setContent] = useState("");
  return (
    <div>
      <div className="container">
        <div className="card p-3">
          <div className="card-header h2">Manage Pages</div>
          <form action="">
            <label className="mt-3">Selected Page</label>
            <select className="form-control p-3">
              <option value="About">Select</option>
              <option value="About">About</option>
            </select>
            <div className="my-3">
              <label className="mt-3">Description</label>
              <Editor value={content} onChange={setContent} />
            </div>
            <button className="btn btn-primary p-3 w-100">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ManagePages;
