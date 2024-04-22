import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewRecord } from "../../Components";
function ShowPackage() {
  const [PackageInfo, setPackagenfo] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filter, setFilter] = useState("");
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [pageSize] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:4000/api/package/getPackage/${id}`).then(
      (response) => {
        response.json().then((PackageInfo) => {
          setPackagenfo(PackageInfo);
        });
      }
    );
  }, [id]);
  const sanitizedFeatures = PackageInfo?.features.replace(
    /<\/?[^>]+(>|$)/g,
    ""
  );

  useEffect(() => {
    fetch(`http://localhost:4000/api/review/getPackageReviews/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Reviews");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  useEffect(() => {
    // Apply filter
    const filtered = reviews.filter((review) =>
      review.package.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredReviews(filtered);
  }, [reviews, filter]);

  const pageCount = Math.ceil(filteredReviews.length / pageSize);
  const paginatedBookings = filteredReviews.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="container">
      <div className="card p-3 my-5">
        <div className="col-md-12">
          <img
            className="w-100"
            src={`http://localhost:4000/${PackageInfo?.cover}`}
            alt=""
          />
        </div>
        <div className="col-md-12 mt-3">
          <h3 className="text-primary">Package Name: {PackageInfo?.name}</h3>
          {/* <p className="secondary">{PackageInfo.features}</p> */}
          <p className="secondary">{PackageInfo?.details}</p>
        </div>
        <hr />
        <div className="d-flex align-items-center justify-content-between gap-3">
          <div className="border p-3 rounded-3 w-75">
            <p className="h5">Package Type : {PackageInfo?.type}</p>
            <p className="secondary">
              Package Location : {PackageInfo?.location}
            </p>
            <p dangerouslySetInnerHTML={{ __html: sanitizedFeatures }}></p>
          </div>
          <div className="border p-3 rounded-3 w-25">
            <p>Grand Total</p>
            <h2 className="text-primary">{PackageInfo?.price}$</h2>
          </div>
        </div>
      </div>
      <div className="card p-3 my-5">
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
        <h4>Package Review</h4>
        <div className="bg-light p-3">
          {paginatedBookings.map((pk, index) => (
            <ReviewRecord
              key={pk._id}
              {...pk}
              number={(page - 1) * pageSize + index + 1}
            />
          ))}
          <hr />
          <div className="">
            <nav className="row">
              <div className="col-md-2">paginated Reviews</div>
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
  );
}

export default ShowPackage;
