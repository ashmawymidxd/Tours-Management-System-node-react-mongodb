import React from "react";
import cover_1 from "../../assets/img/cover_1.png";
import cover_2 from "../../assets/img/cover_2.png";
import cover_3 from "../../assets/img/cover_3.png";
function GaidLine() {
  return (
    <div className="container">
      <div className="card p-3 my-3 rounded-2">
        <h2 className="header text-center my-3">This section for - aboutus</h2>
      </div>

      <div className="bg-light p-5 rounded-2 shadow-3 my-5">
        <h1>Hello, Sir!</h1>
        <p>
          <strong>Payment Processing</strong>: Handles secure online payments,
          supports various payment methods, and generates invoices and receipts.
          Inventory Management: Manages the inventory of available tours,
          including tracking availability, scheduling, and capacity limits.
          Resource Allocation: Assigns guides, vehicles, accommodations, and
          other resources to specific tours based on availability and
          requirements. Reporting and Analytics: Generates reports on various
          aspects of the business, such as sales, revenue, customer
          demographics, and popular destinations. Communication and
          Notifications: Sends automated notifications to customers regarding
          booking confirmations, reminders, and updates. Integration with
          External Systems: Integrates with external services like payment
          gateways, accounting software, CRM systems, and marketing platforms.
          CRM (Customer Relationship Management): Helps in building and
          maintaining relationships with customers through personalized
          communication and offers. Feedback and Reviews: Collects and manages
          feedback from customers, allowing for improvements based on their
          experiences. Compliance and Documentation: Ensures compliance with
          legal and regulatory requirements related to travel and tourism.
          Multi-language and Multi-currency Support: Allows for tours to be
          offered in different languages and supports transactions in various
          currencies. Marketing and Promotions: Facilitates marketing efforts
          through tools like email campaigns, promotional offers, and social
          media integration. Mobile Accessibility: Provides a mobile-friendly
          interface for customers to browse and book tours on their smartphones
          or tablets. Security and Data Protection: Ensures the security of
          customer information and financial transactions through encryption and
          secure protocols. Feedback and Performance Tracking: Monitors customer
          satisfaction, tour performance, and guide performance to identify
          areas for improvement.
        </p>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="card p-3">
            <img src={cover_1} alt="..." className="w-100" />
            <div className="caption">
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
          <div className="card p-3">
            <img src={cover_2} alt="..." className="w-100" />
            <div className="caption">
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
          <div className="card p-3">
            <img src={cover_3} alt="..." className="w-100" />
            <div className="caption">
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

export default GaidLine;
