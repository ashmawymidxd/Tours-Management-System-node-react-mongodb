import React from "react";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
// import { Navigate } from "react-router-dom";
import Editor from "../../Editor";

function CreatePackage() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [features, setFeatures] = useState("");
  const [files, setFiles] = useState("");

  async function createNewPackage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("name", name);
    data.set("type", type);
    data.set("location", location);
    data.set("price", price);
    data.set("details", details);
    data.set("features", features);
    data.set("file", files[0]);

    const response = await fetch(
      "http://localhost:4000/api/package/createPackage",
      {
        method: "POST",
        body: data,
        credentials: "include",
      }
    );
    // alert('j')

    if (response.ok) {
      alert("Package created successfully");
      setName("");
      setType("");
      setLocation("");
      setPrice("");
      setDetails("");
      setFeatures("");
      setFiles("");
    }
  }

  return (
    <div className="container my-5 pb-3">
      <div className="card p-3">
        <div className="border p-3 my-3 rounded-2">
          <h2 className="header text-center my-3">Create Package</h2>
        </div>
        <form onSubmit={createNewPackage}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  required
                />
                <label for="name">Package Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  value={type}
                  onChange={(ev) => setType(ev.target.value)}
                  required
                />
                <label for="email">Package Type</label>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={location}
                      onChange={(ev) => setLocation(ev.target.value)}
                      required
                    />
                    <label for="subject">Package Location</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      value={price}
                      onChange={(ev) => setPrice(ev.target.value)}
                      required
                    />
                    <label for="subject">Package Price</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control h-50 w-100"
                  placeholder="Leave a message here"
                  rows={10}
                  cols={30}
                  value={details}
                  onChange={(ev) => setDetails(ev.target.value)}
                  required
                ></textarea>
                <label for="message">Package Details</label>
              </div>
            </div>
            <div className="col-12 mt-5">
              <label for="message">Package Features</label>
              <div className="form-floating">
                <Editor value={features} onChange={setFeatures} required />
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Leave a message here"
                  onChange={(ev) => setFiles(ev.target.files)}
                  required
                />
                <label for="message">Package Image</label>
              </div>
            </div>

            <div className="col-12">
              <button
                id="submitButton"
                className="btn btn-primary w-100 p-3"
                type="submit"
              >
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreatePackage;
