import React from "react";
function IssueRecord({
  _id,
  author: { username, email },
  number,
  title,
  description,
  status,
  createdAt,
  updatedAt,
}) {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{username}</td>
      <td>013333</td>
      <td>{email}</td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{description}</td>
      <td>{createdAt}</td>
    </tr>
  );
}

export default IssueRecord;
