import React from "react";

function GestOptions() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card p-3 shadow-0  my-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 shadow-0 "><i className="fa fa-usd text-primary" style={{"fontSize":"50px"}}></i></div>
                <div className="text">
                  <h4 className="text-primary">UP TO USD. 50 OFF</h4>
                  <h4>TRAVEL SMART</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-0  my-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 shadow-0 "> <i className="fa fa-h-square text-primary" style={{"fontSize":"50px"}}></i></div>
                <div className="text">
                  <h4 className="text-primary">UP TO 70% OFF</h4>
                  <h4>ACROSS WORLD</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3 shadow-0  my-3 shadow-0 p-5">
              <div className=" d-flex gap-3">
                <div className="card p-3 shadow-0 "><i className="fa fa-mobile text-primary" style={{"fontSize":"50px"}}></i></div>
                <div className="text">
                  <h4 className="text-primary">FLAT USD. 50 OFF</h4>
                  <h4>US APP OFFER</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GestOptions;
