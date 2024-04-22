import React from "react";

function ReviewRecord({ comment, stars, user: { username } }) {
  return (
    <>
      <div className="card shadow-0 border my-3">
        <div className="card-body m-0">
          <div className="row">
            <div className="col-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                className="rounded-circle img-fluid shadow-1"
                alt="woman avatar"
                width="100"
                height="100"
              />
            </div>
            <div className="col-lg-10">
              <p className="fw-bold lead mb-2">
                <strong>{username}</strong>
              </p>
              <p className="text-muted fw-light mb-4">{comment}</p>
              <p className="fw-bold text-muted mb-0">
                <ul className="list-unstyled d-flex">
                  {[...Array(Math.floor(stars))].map((_, index) => (
                    <li key={index}>
                      <i className="fas fa-star fa-sm text-info"></i>
                    </li>
                  ))}
                  {stars % 1 !== 0 && (
                    <li>
                      <i className="fas fa-star-half-alt fa-sm text-info"></i>
                    </li>
                  )}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewRecord;
