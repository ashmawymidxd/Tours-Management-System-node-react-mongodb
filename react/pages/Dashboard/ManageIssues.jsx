import React, { useState, useEffect } from "react";
import { IssueRecord } from "../../Components";

function ManageIssues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/Issue/getIssues")
      .then((response) => response.json())
      .then((data) => setIssues(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div className="container">
      <div className="card overflow-x-scroll">
        <div className="card-header">
          <h2>Manage Issues</h2>
        </div>
        <div className="card-body">
          <div className="table">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">NAME</th>
                  <th scope="col">MOBILE NO.</th>
                  <th scope="col">EMAIL ID</th>
                  <th scope="col">ISSUES</th>
                  <th scope="col">STATUS</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">POSTING DATE</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue, index) => (
                  <IssueRecord key={index} {...issue} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageIssues;
