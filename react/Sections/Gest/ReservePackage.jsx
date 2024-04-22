import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function GestToursPackage() {
  const { userInfo } = useContext(UserContext);
  const [PackageInfo, setPackagenfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/package/getPackage/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch package information");
        }
        return response.json();
      })
      .then((PackageInfo) => {
        setPackagenfo(PackageInfo);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [comment, setComment] = useState("");

  async function createBooking(ev) {
    if (!userInfo) {
      alert("Please login to book a package");
      return;
    }

    ev.preventDefault();

    const formattedStartDate = new Date(startDate).toISOString().split("T")[0];
    const formattedEndDate = new Date(endDate).toISOString().split("T")[0];

    const formData = {
      package: PackageInfo?._id,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      comment,
      status: "pending",
    };

    const response = await fetch(
      "http://localhost:4000/api/booking/createBooking",
      {
        method: "POST",
        body: JSON.stringify(formData),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Booking created successfully");
    } else {
      alert("Failed to create booking you are not loged in");
    }
  }

  return (
    <div className="container">
      <div className="card p-3 my-5">
        <h4>Book It Now ?</h4>
        <form className="w-100" onSubmit={createBooking}>
          <div className="d-flex align-items-center justify-content-between gap-3 my-4">
            <div className="w-100">
              <label htmlFor="from">From</label>
              <input
                type="date"
                className="form-control w-100 p-3"
                name="from"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
              />
            </div>
            <div className="w-100">
              <label htmlFor="to">To</label>
              <input
                type="date"
                className="form-control w-100 p-3"
                name="to"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
              />
            </div>
          </div>

          <label>Write a Comment</label>

          <textarea
            className="w-100"
            id=""
            cols="30"
            rows="10"
            name="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
          <hr />
          <button className="btn btn-primary w-100 p-3">Book</button>
        </form>
      </div>
    </div>
  );
}

export default GestToursPackage;
