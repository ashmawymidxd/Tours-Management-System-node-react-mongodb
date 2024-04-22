import React from "react";

function IssueUserRecord({
  number,
  _id,
  title,
  description,
  status,
  author: { _id: authorId, username, email, role },
  createdAt,
  updatedAt,
  __v,
}) {
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{title}</td>
      <td>{description}</td>
      <td>{createdAt}</td>
      <td>{status}</td>
    </tr>
  );
}
export default IssueUserRecord;