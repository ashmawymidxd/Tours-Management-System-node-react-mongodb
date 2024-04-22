import React, { useState, useEffect } from "react";
import { EnquiryUserRecord } from "../../Components";

function SendEnquiry() {
  const [userEnquiryTickets, setEnquiryTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/enquiry/getUserEnquirys", {
      credentials: "include",
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch Enquirys");
        }
        return response.json();
      })
      .then((data) => {
        setEnquiryTickets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:4000/api/enquiry/createEnquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.errors) {
          setError(data.errors._message);
        } else {
          // Handle success response
          console.log("Enquiry submitted successfully!");
          alert("Enquiry submitted successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            description: "",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="container card my-5 pb-3">
        <div className="border p-3 my-3 rounded-2">
          <h2 className="header text-center my-3">Send Enquiry</h2>
        </div>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <form id="emailForm" onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Phone</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a message here"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="col-12">
              <button
                id="submitButton"
                className="btn btn-primary w-100 p-3"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="container card my-5 pb-3">
        <div className="">
          <h4 className="card-header">My Enquiry Tickets</h4>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Email</th>
                  <th scope="col">User Phone</th>
                  <th scope="col">Enquiry Subject</th>
                  <th scope="col">Enquiry Description</th>
                  <th scope="col">Enquiry Created</th>
                  <th scope="col">Enquiry Updated</th>
                </tr>
              </thead>
              <tbody>
                {userEnquiryTickets.map((Enquiry, index) => (
                  <EnquiryUserRecord
                    key={index}
                    {...Enquiry}
                    number={index + 1}
                  />
                ))}
                <EnquiryUserRecord />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendEnquiry;
