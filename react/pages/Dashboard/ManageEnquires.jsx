import React, { useState, useEffect } from "react";
import { EnquiryRecord } from "../../Components";

function ManageEnquires() {
  const [enquiries, setEnquiries] = useState([]);
  const [filteredEnquiries, setFilteredEnquiries] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(5); // Number of items per page

  useEffect(() => {
    fetch("http://localhost:4000/api/enquiry/getEnquiries")
      .then((response) => response.json())
      .then((data) => {
        setEnquiries(data);
        setFilteredEnquiries(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    // Filter the enquiries based on the filter input
    const filtered = enquiries.filter((enquiry) =>
      enquiry.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredEnquiries(filtered);
  }, [filter, enquiries]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setPage(1); // Reset page to 1 when filter changes
  };

  const totalPages = Math.ceil(filteredEnquiries.length / perPage);
  const paginatedEnquiries = filteredEnquiries.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="container">
      <div className="">
        <div className="table">
          <div className="w3l-table-info">
            <div className="card overflow-x-scroll">
              <div className="card-header">
                <h2>Manage Enquiries</h2>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name"
                    value={filter}
                    onChange={handleFilterChange}
                  />
                </div>
              </div>
              <div className="card-body">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th>Ticket id</th>
                      <th>Name</th>
                      <th>Mobile No./ Email</th>
                      <th>Subject</th>
                      <th>Description</th>
                      <th>Posting date</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedEnquiries.map((enquiry, index) => (
                      <EnquiryRecord
                        key={enquiry._id}
                        {...enquiry}
                        number={index + 1}
                      />
                    ))}
                  </tbody>
                </table>
                {totalPages > 1 && (
                  <nav>
                    <ul className="pagination">
                      {Array.from({ length: totalPages }).map((_, index) => (
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
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageEnquires;
