import React from "react";

function PackageStatistic() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 text-primary shadow-0">
                  <i
                    class="fa-regular fa-rectangle-list"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div className="text">
                  <h4 className="text-primary">80000</h4>
                  <h4>Enquiries</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 text-primary shadow-0">
                  <i class="fa-solid fa-users" style={{ fontSize: "50px" }}></i>
                </div>
                <div className="text">
                  <h4 className="text-primary">1900</h4>
                  <h4>Regestered users</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 text-primary shadow-0">
                  <i
                    className="fa-solid fa-square-poll-vertical"
                    style={{ fontSize: "50px" }}
                  ></i>
                </div>
                <div className="text">
                  <h4 className="text-primary">7,00,00,000+</h4>
                  <h4>Booking</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageStatistic;
