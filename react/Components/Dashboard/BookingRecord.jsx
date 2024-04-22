import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

function PookingRecord({
  number,
  _id,
  package: { name, price, type, location },
  user: { username, email },
  onDelete,
  createdAt,
  status,
}) {
  const handleDelete = () => {
    fetch(`http://localhost:4000/api/booking/deleteBooking/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Package deleted successfully:", data);
        // Call the onDelete callback if provided
        if (onDelete) {
          onDelete();
          // Redirect to the dashboard
        }
        return <Navigate to="/dashboard/ManageBooking" />;
      })
      .catch((error) => {
        console.error("Error deleting package:", error);
      });
  };

  return (
    <tr>
      <td>{number}</td>
      <td>{name}</td>
      <td>{type}</td>
      <td>{location}</td>
      <td>{price}$</td>
      <td>{createdAt}</td>
      <td>{status}</td>
      <td>
        <div className="d-flex gap-3">
          <Link
            to={`/dashboard/ManageBack/${_id}`}
            className="btn btn-primary shadow-0"
          >
            View
          </Link>
          <button className="btn btn-secondary shadow-0" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default PookingRecord;
