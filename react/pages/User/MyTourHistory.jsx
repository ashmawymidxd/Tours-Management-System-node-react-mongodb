import React, { useState, useEffect } from "react";
import { TourHistoryRecord } from "../../Sections/";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function MyTourHistory() {
  const { userInfo } = useContext(UserContext);
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:4000/api/booking/getBookingsForUser/${userInfo?.id}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bookings");
        }
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setFilteredBookings(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userInfo?.id]);

  useEffect(() => {
    // Apply filter
    const filtered = bookings.filter((booking) =>
      booking.package.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredBookings(filtered);
  }, [bookings, filter]);

  const pageCount = Math.ceil(filteredBookings.length / pageSize);
  const paginatedBookings = filteredBookings.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <h4 className="card-header py-3">
            <span className="text-primary">{userInfo?.username}</span> Tour
            History
          </h4>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">Search ..</div>
              <div className="col-md-6">
                <div className="input-group my-3">
                  <input
                    type="text"
                    placeholder="Filter by tour name"
                    value={filter}
                    className="form-control"
                    onChange={(e) => setFilter(e.target.value)}
                  />
                  <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <table className="table table-bordered">
              <thead className="">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tour Name</th>
                  <th scope="col">Tour Date</th>
                  <th scope="col">Tour Time</th>
                  <th scope="col">Tour Duration</th>
                  <th scope="col">Tour Price</th>
                  <th scope="col">Tour Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {paginatedBookings.map((pk, index) => (
                  <TourHistoryRecord
                    key={pk._id}
                    {...pk}
                    number={(page - 1) * pageSize + index + 1}
                  />
                ))}
              </tbody>
            </table>
            <div className="card-footer">
              <nav className="row">
                <div className="col-md-2">paginated Bookings</div>
                <div className="col-md-10">
                  <ul className="pagination">
                    {Array.from({ length: pageCount }).map((_, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          page === index + 1 ? "active" : ""
                        }`}
                      >
                        <button
                          className="page-link"
                          onClick={() => setPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTourHistory;
