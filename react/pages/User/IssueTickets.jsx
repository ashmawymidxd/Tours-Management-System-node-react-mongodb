import React, { useEffect, useState } from "react";
import { IssueUserRecord } from "../../Components";

function IssueTickets() {
  const [userIssueTickets, setIssueTickets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/issue/getUserIssues", {
      credentials: "include",
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch issues");
        }
        return response.json();
      })
      .then((data) => {
        setIssueTickets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [issueTitle, setIssueTitle] = useState("");
  const [issueDescription, setIssueDescription] = useState("");

  const createIssue = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/api/issue/createIssue", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: issueTitle,
        description: issueDescription,
        status: "open",
      }),
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to create issue");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Issue created successfully!");

        setIssueTitle("");
        setIssueDescription("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to create issue");
      });
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="card my-5">
          <h4 className="card-header">Create Issue Ticket</h4>
          <div className="card-body">
            <form onSubmit={createIssue}>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="issueTitle">Issue Title</label>
                    <input
                      type="text"
                      className="form-control p-3"
                      id="issueTitle"
                      placeholder="Enter Issue Title"
                      required
                      value={issueTitle}
                      onChange={(e) => setIssueTitle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="issueDescription">Issue Description</label>
                    <input
                      type="text"
                      className="form-control p-3"
                      id="issueDescription"
                      placeholder="Enter Issue Description"
                      required
                      value={issueDescription}
                      onChange={(e) => setIssueDescription(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100 p-3 mt-5">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="card">
          <h4 className="card-header">My Issue Tickets</h4>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Issue Title</th>
                  <th scope="col">Issue Description</th>
                  <th scope="col">Issue Date</th>
                  <th scope="col">Issue Status</th>
                </tr>
              </thead>
              <tbody>
                {userIssueTickets.map((issue, index) => (
                  <IssueUserRecord key={index} {...issue} number={index + 1} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IssueTickets;
