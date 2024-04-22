import React from "react";

function ContactEmail() {
  return (
    <div className="container card my-5 pb-3">
      <div className="border p-3 my-3 rounded-2">
        <h2 className="header text-center my-3">
          Send Email
        </h2>
      </div>

      <form id="emailForm" action="/" method="post">
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Name"
                name="name"
              />
              <label for="name">Your Name</label>
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
              />
              <label for="email">Your Email</label>
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
              />
              <label for="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                name="message"
              ></textarea>
              <label for="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button
              id="submitButton"
              className="btn btn-primary w-100 py-3"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactEmail;
