import React from "react";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../UserContext";
function AddPackageReview() {
  const { userInfo } = useContext(UserContext);
  const [PackageInfo, setPackagenfo] = useState(null);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState(0);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:4000/api/review/createReview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        package: id,
        userId: userInfo.id,
        comment: review,
        stars: stars,
      }),
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response
        console.log(data);
        if (data.error) {
          alert(data.error);
        } else {
          alert("Review added successfully");
          setReview("");
          setStars(0);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:4000/api/package/getUserPackage/${id}`).then(
      (response) => {
        response.json().then((PackageInfo) => {
          setPackagenfo(PackageInfo);
        });
      }
    );
  }, [id]);
  const sanitizedFeatures = PackageInfo?.features.replace(
    /<\/?[^>]+(>|$)/g,
    ""
  );

  return (
    <div className="container">
      <div className="card p-3 my-5">
        <div className="col-md-12">
          <img
            className="w-100"
            src={`http://localhost:4000/${PackageInfo?.cover}`}
            alt=""
          />
        </div>
        <div className="col-md-12 mt-3">
          <h3 className="text-primary">Package Name: {PackageInfo?.name}</h3>
          <p className="secondary">{PackageInfo?.details}</p>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="border p-3 rounded-3 w-75">
            <p className="h5">Package Type : {PackageInfo?.type}</p>
            <p className="secondary">
              Package Location : {PackageInfo?.location}
            </p>
            <p dangerouslySetInnerHTML={{ __html: sanitizedFeatures }}></p>
          </div>
          <div className="border p-3 rounded-3 w-25">
            <p>Grand Total</p>
            <h2 className="text-primary">{PackageInfo?.price}$</h2>
          </div>
        </div>
      </div>

      {userInfo.id === PackageInfo?.author?._id ? (
        <div className="alert alert-danger">
          You cannot review your own package
        </div>
      ) : (
        <div className="card p-3 my-5">
          <h3 className="text-primary">Add a review</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="review" className="form-label">
                Review
              </label>
              <textarea
                className="form-control"
                id="review"
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="stars" className="form-label">
                Stars
              </label>
              <input
                type="number"
                className="form-control p-3"
                id="stars"
                value={stars}
                onChange={(e) => setStars(parseInt(e.target.value))}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary p-3 w-100">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddPackageReview;
