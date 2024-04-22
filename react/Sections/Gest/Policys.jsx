import React from "react";
import cover_1 from "../../assets/img/cover_1.png";

function Policys() {
  return (
    <div className="container">
      <div className="card p-3 my-3 rounded-2">
        <h2 className="header text-center my-3">
          This section for - Policys
        </h2>
      </div>
      <div className="row my-3">
        <div className="col-sm-6 col-md-4">
          <div className="card border">
            <img src={cover_1} alt="..." className="w-100" />
            <div className="caption p-3">
              <h3>Booking and Reservation</h3>
              <p>
                Allows customers to browse and book tours online. Manages
                reservations, including availability, pricing, and confirmation.
              </p>
              <p>
                <a href="/" className="btn btn-primary" role="button">
                  Read More
                </a>{" "}
                <a href="/" className="btn btn-default" role="button">
                  Start Now
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card border">
            <img src={cover_1} alt="..." className="w-100" />
            <div className="caption p-3">
              <h3>Itinerary Planning</h3>
              <p>
                Helps in creating detailed itineraries for each tour, including
                activities, destinations, accommodations, and transportation.
              </p>
              <p>
                <a href="/" className="btn btn-primary" role="button">
                  Read More
                </a>{" "}
                <a href="/" className="btn btn-default" role="button">
                  Start Now
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="card border">
            <img src={cover_1} alt="..." className="w-100" />
            <div className="caption p-3">
              <h3>Customer Management</h3>
              <p>
                Stores customer information, including contact details, booking
                history, preferences, and special requests.
              </p>
              <p>
                <a href="/" className="btn btn-primary" role="button">
                  Read More
                </a>{" "}
                <a href="/" className="btn btn-default" role="button">
                  Start Now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policys;
