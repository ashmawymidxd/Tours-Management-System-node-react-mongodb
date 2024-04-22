import React from "react";
import { Link } from "react-router-dom";

function truncateText(text, limit) {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
}

function Package({
  _id,
  name,
  type,
  details,
  location,
  price,
  features,
  cover,
  createdAt,
}) {
  const sanitizedFeatures = features.replace(/<\/?[^>]+(>|$)/g, "");
  const truncatedDetails = truncateText(details, 30);
  const truncatedFeatures = truncateText(sanitizedFeatures, 30);

  return (
    <>
      <div className="card p-3 my-3">
        <div className="row">
          <div className="col-md-4">
            <img
              className="w-100"
              src={"http://localhost:4000/" + cover}
              alt=""
            />
          </div>
          <div className="col-md-6 mt-3">
            <h3 className="text-primary">Package Name: {name}</h3>
            <h5>Package Type : {type}</h5>
            <p className="secondary">Package Location : {location}</p>
            <p className="secondary">
              <strong>Package Details</strong> <br /> {truncatedDetails}
            </p>
            <strong>Package Features</strong>
            <p dangerouslySetInnerHTML={{ __html: truncatedFeatures }}></p>
          </div>
          <div className="col-md-2 mt-3">
            <Link
              to={`/gest/Package/${_id}`}
              className="btn btn-outline-primary"
            >
              review
            </Link>
            <hr />
            <h2>{price}$</h2>
            <hr />
            <h>{createdAt}</h>
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
