import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { Navigate } from "react-router-dom";
import Editor from "../../Editor";

function ManagePackage() {
  const [PackageInfo, setPackagenfo] = useState(null);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState("");
  const [features, setFeatures] = useState("");
  const [files, setFiles] = useState("");
  const [lcover, setCover] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/api/package/getPackage/" + id).then(
      (response) => {
        response.json().then((PackageInfo) => {
          setPackagenfo(PackageInfo);
          setName(PackageInfo.name);
          setType(PackageInfo.type);
          setLocation(PackageInfo.location);
          setPrice(PackageInfo.price);
          setDetails(PackageInfo.details);
          setFeatures(PackageInfo.features);
          setCover(PackageInfo.cover);
          setFiles(PackageInfo.cover);
        });
      }
    );
  }, [id]);

  async function updatePackage(ev) {
    ev.preventDefault();
    const data = new FormData();
    data.set("name", name);
    data.set("type", type);
    data.set("location", location);
    data.set("details", details);
    data.set("features", features);
    data.set("id", id);
    data.set("lcover", lcover);
    if (files?.[0]) {
      data.set("file", files[0]);
    }
    const response = await fetch(
      "http://localhost:4000/api/package/updatePackage",
      {
        method: "PUT",
        body: data,
        credentials: "include",
      }
    );
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/dashboard/ManagePackages"} />;
  }

  return (
    <div className="container my-5 pb-3">
      <div className="card p-3">
        <div className="border p-3 mt-3 rounded-2 bg-light">
          <h2 className="header text-center my-3">Package Details</h2>
        </div>
        <div className="mt-5">
          {PackageInfo && (
            <form onSubmit={updatePackage}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      name="name"
                      value={name}
                      onChange={(ev) => setName(ev.target.value)}
                    />
                    <label htmlFor="name">Package Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="type"
                      placeholder="Package Type"
                      value={type}
                      onChange={(ev) => setType(ev.target.value)}
                      required
                    />
                    <label htmlFor="type">Package Type</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          value={location}
                          onChange={(ev) => setLocation(ev.target.value)}
                          required
                        />
                        <label htmlFor="location">Package Location</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="location"
                          placeholder="Package Location"
                          value={price}
                          onChange={(ev) => setPrice(ev.target.value)}
                          required
                        />
                        <label htmlFor="location">Package Price</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      class="form-control h-50 w-100"
                      placeholder="Package Features"
                      rows={10}
                      cols={30}
                      value={details}
                      onChange={(ev) => setDetails(ev.target.value)}
                    ></textarea>
                    <label htmlFor="details">Package Details</label>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="features">Package Features</label>
                  <Editor value={features} onChange={setFeatures} required />
                </div>
                <div className="col-md-12">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <img
                        className="w-100"
                        src={`http://localhost:4000/${PackageInfo?.cover}`}
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="file"
                          className="form-control"
                          id="image"
                          name="image"
                          onChange={(ev) => setFiles(ev.target.files)}
                        />
                        <label htmlFor="image">Package Image</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <button
                    id="submitButton"
                    className="btn btn-primary w-100 p-3"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManagePackage;
