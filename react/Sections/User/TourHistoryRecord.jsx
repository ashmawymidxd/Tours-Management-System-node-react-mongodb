import React from "react";
import { Link } from "react-router-dom";
function TourHistoryRecord({
  package: { name, price, _id },
  user: { username, email },
  startDate,
  endDate,
  comment,
  status,
  createdAt,
  updatedAt,
}) {
  // Calculate duration
  const start = new Date(startDate);
  const end = new Date(endDate);
  const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));

  // Format start date
  const formattedStartDate = new Date(startDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedEndtDate = new Date(endDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <tr>
      <th scope="row">1</th>
      <td>{name}</td>
      <td>{formattedStartDate}</td>
      <td>{formattedEndtDate}</td>
      <td>{duration} days</td>
      <td>{price}$</td>
      <td>{status}</td>
      <td>
        <Link className="btn btn-primary" to={`/user/AddPackageReview/${_id}`}>
          Review
        </Link>
      </td>
    </tr>
  );
}

export default TourHistoryRecord;
