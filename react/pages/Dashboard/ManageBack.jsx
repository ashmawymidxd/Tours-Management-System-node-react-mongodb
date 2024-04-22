import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

function ManageBack() {
  const [BookInfo, setBookInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:4000/api/booking/getBooking/" + id).then(
      (response) => {
        response.json().then((PackageInfo) => {
          setBookInfo(PackageInfo);
        });
      }
    );
  }, [id]);

  if (!BookInfo) {
    return null; // or loading spinner
  }

  return (
    <div className="container">
      <div className="card p-5 mb-3">
        <h2 className="text-center">Booking Details</h2>
      </div>
      <div className="row">
        {/* user */}
        <div className="col-md-4">
          <div className="card mt-5 p-3">
            <div
              className="w-25 bg-primary text-white text-center p-3 rounded"
              style={{ marginTop: "-50px" }}
            >
              <i className="fa-solid fa-user fa-2xl"></i>
            </div>
            <div
              className="d-flex justify-content-between p-3"
              style={{ height: "50vh" }}
            >
              <div className="">
                <strong>User:</strong>
                <br />
                <strong>Email</strong>
              </div>
              <div className="">
                {BookInfo.user.username}
                <br />
                {BookInfo.user.email}
              </div>
            </div>
          </div>
        </div>
        {/* package */}
        <div className="col-md-4">
          <div className="card mt-5 p-3">
            <div
              className="w-25 bg-primary text-white text-center p-3 rounded"
              style={{ marginTop: "-50px" }}
            >
              <i className="fa-solid fa-book fa-2xl"></i>
            </div>
            <div
              className="d-flex justify-content-between p-3"
              style={{ height: "50vh" }}
            >
              <div className="">
                <strong>Package:</strong>
                <br />
                <strong>Price:</strong>
                <br />
                <strong>Location:</strong>
                <br />
                <strong>Created at:</strong>
              </div>
              <div className="">
                {BookInfo.package.name}
                <br />${BookInfo.package.price}
                <br />
                {BookInfo.package.location}
                <br />
                {new Date(BookInfo.package.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
        {/* status */}
        <div className="col-md-4">
          <div className="card mt-5 p-3">
            <div
              className="w-25 bg-primary text-white text-center p-3 rounded"
              style={{ marginTop: "-50px" }}
            >
              <i className="fa-solid fa-s fa-2xl"></i>
            </div>
            <div
              className="d-flex justify-content-between p-3"
              style={{ height: "50vh" }}
            >
              <div className="">
                <strong>Status:</strong>
                <br />
                <strong>Comment:</strong>
              </div>
              <div className="">
                {BookInfo.status}
                <br />
                {BookInfo.comment}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-5 mt-5">
        <h2 className="text-center">Booking Review</h2>
      </div>
    </div>
  );
}

export default ManageBack;
