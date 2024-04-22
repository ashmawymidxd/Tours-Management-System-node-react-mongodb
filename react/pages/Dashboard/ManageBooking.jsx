import React, { useEffect, useState } from "react";
import { BookingRecord } from "../../Components";

function ManageBooking() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch("http://localhost:4000/api/booking/getBookings", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((bookings) => {
        setBookings(bookings);
        setFilteredBookings(bookings);
      });
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = bookings.filter((pkg) =>
      pkg.name.toLowerCase().includes(searchTerm)
    );
    setFilteredBookings(filtered);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredBookings.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleBookings = filteredBookings.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="container p-3">
      <div className="agile-tables">
        <div className="w3l-table-info card overflow-x-scroll">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="">Bookings Lists</h2>
              <div className="btn-group w-50 shadow-0 ">
                <button className="btn btn-primary  h-100">
                  <i className="fa-solid fa-search text-white fa-2xl"></i>
                </button>
                <input
                  placeholder="Search For Bookings"
                  type="text"
                  className="form-control rounded-0"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <table id="table" className="table">
            <thead className="table-light">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Price</th>
                <th>Creation Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleBookings.map((pkg, index) => (
                <BookingRecord key={pkg._id} {...pkg} number={index + 1} />
              ))}
            </tbody>
            <div>
              <td colSpan="7">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          index + 1 === currentPage ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </td>
            </div>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageBooking;
