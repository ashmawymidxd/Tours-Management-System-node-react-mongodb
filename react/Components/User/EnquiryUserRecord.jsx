import React from "react";

function EnquiryUserRecord({
  number,
  _id,
  name,
  email,
  phone,
  subject,
  description,
  createdAt,
  updatedAt,
  __v,
}) {
  return <tr>
    <th scope="row">{number}</th>
    <td>{name}</td>
    <td>{email}</td>
    <td>{phone}</td>
    <td>{subject}</td>
    <td>{description}</td>
    <td>{createdAt}</td>
    <td>{updatedAt}</td>
  </tr>;
}

export default EnquiryUserRecord;

