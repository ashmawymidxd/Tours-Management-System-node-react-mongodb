import React from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

function DeletePackage() {
  const deletePackage = async () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const { id } = "6624354ebcaf1140f5b4f4cc"; // Replace 'your_package_id' with the actual package id

    const res = await fetch("http://localhost:4000/api/package/deletePackage", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      // Handle success, e.g., redirect to another page
      console.log("Package deleted");
    } else {
      // Handle error
      console.error("Failed to delete package");
    }
  };

  return (
    <div className="container my-5 pb-3">
      <div className="card p-3">
        <div className="border p-3 mt-3 rounded-2 bg-light">
          <h2 className="header text-center my-3">Delete This Package</h2>
        </div>
        <div className="mt-5">
          <div className="d-flex gap-3">
            <button
              className="btn btn-warning p-3 w-50"
              onClick={deletePackage}
            >
              Delete
            </button>
            <Link
              className="btn btn-secondary p-3 w-50"
              to={"/dashboard/ManagePackages"}
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeletePackage;
