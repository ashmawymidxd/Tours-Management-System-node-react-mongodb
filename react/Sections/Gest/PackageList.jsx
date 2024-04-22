import React, { useEffect, useState } from "react";
import { Package } from "../../Components";
import { Link } from "react-router-dom";

function PackageList() {
  const [packages, setPackages] = useState([]);
  const [filterdPackages, setFilterdPackages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    fetch("http://localhost:4000/api/package/getPackages").then((response) => {
      response.json().then((packages) => {
        setPackages(packages);
        setFilterdPackages(packages);
      });
    });
  }, [packages]);

  const handelChange = (e) => {
    const fitler = packages.filter((packages) =>
      packages.name.toLowerCase().includes(e.target.value)
    );
    setFilterdPackages(fitler);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const indexOfLastPackage = currentPage * pageSize;
  const indexOfFirstPackage = indexOfLastPackage - pageSize;
  const currentPackages = filterdPackages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container">
        <div className="card p-3 mt-5 shadow-0">
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
                onInput={handelChange}
              />
            </div>
          </div>
        </div>
        <>
          {currentPackages.length > 0 &&
            currentPackages.map((packageI) => (
              <Package key={packageI.id} {...packageI} />
            ))}
        </>
        <nav className="bg-white gap-3">
          <ul className="pagination ">
            {Array.from({
              length: Math.ceil(filterdPackages.length / pageSize),
            }).map((_, index) => (
              <li key={index} className="page-item">
                <button
                  className="page-link"
                  onClick={() => paginate(index + 1)}
                  style={{ cursor: "pointer" }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="btn btn-primary" to="/gest/ToursPackages">
          View More Package
        </Link>
      </div>
    </>
  );
}

export default PackageList;
