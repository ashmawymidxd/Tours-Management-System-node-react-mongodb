import React, { useEffect, useState } from "react";
import { PackageRecord } from "../../Components";
import "./css/dashboard.css";

function ManagePackages() {
  const [packages, setPackages] = useState([]);
  const [filteredPackages, setFilteredPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    fetch("http://localhost:4000/api/package/getPackages")
      .then((response) => response.json())
      .then((packages) => {
        setPackages(packages);
        setFilteredPackages(packages); // Update filteredPackages with initial packages
      });
  }, [packages]);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = packages.filter((pkg) =>
      pkg.name.toLowerCase().includes(searchTerm)
    );
    setFilteredPackages(filtered);
    setCurrentPage(1); // Reset current page to 1 when search term changes
  };

  const totalPages = Math.ceil(filteredPackages.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visiblePackages = filteredPackages.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="container p-3">
      <div className="agile-tables">
        <div className="w3l-table-info card">
          <div className="card-header">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="">Package Lists</h2>
              <div className="btn-group w-50 shadow-0 ">
                <button className="btn btn-primary  h-100">
                  <i className="fa-solid fa-search text-white fa-2xl"></i>
                </button>
                <input
                  placeholder="Search For Package"
                  type="text"
                  className="form-control rounded-0"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table id="table" className="table overflow-x-scroll">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Price</th>
                  <th>Creation Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {visiblePackages.map((pkg, index) => (
                  <PackageRecord key={pkg._id} {...pkg} number={index + 1} />
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
    </div>
  );
}

export default ManagePackages;
