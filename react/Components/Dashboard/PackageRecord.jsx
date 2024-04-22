import React from "react";
import { Link } from "react-router-dom";

function PackageRecord({
  number,
  _id,
  name,
  type,
  location,
  price,
  createdAt,
  onDelete,
}) {
  const handleDelete = () => {
    fetch(`http://localhost:4000/api/package/deletePackage/${_id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Package deleted successfully:", data);
        // Call the onDelete callback if provided
        if (onDelete) {
          onDelete();
        }
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
      <td>
        <div className="d-flex gap-3">
          <Link
            to={`/dashboard/ManagePackage/${_id}`}
            className="btn btn-primary shadow-0"
          >
            View
          </Link>
          <button
            className="btn btn-secondary shadow-0"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

export default PackageRecord;
