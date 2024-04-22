import React from "react";

function EnquiryRecord({
  number,
  name,
  email,
  subject,
  description,
  phone,
  createdAt,
}) {
  return (
    <tr>
      <td width="120" data-th="Ticket id">
        <span className="bt-content">{number}</span>
      </td>
      <td width="50" data-th="Name">
        <span className="bt-content">{name}</span>
      </td>
      <td width="50" data-th="Mobile No./ Email">
        <span className="bt-content">
          {phone} /<br />
          {email}
        </span>
      </td>

      <td width="200" data-th="Subject ">
        <span className="bt-content">{subject}</span>
      </td>
      <td width="400" data-th="Description ">
        <span className="bt-content">{description}</span>
      </td>

      <td width="50" data-th="Posting date ">
        <span className="bt-content">{createdAt}</span>
      </td>

      <td data-th="Action ">
        <span className="bt-content">
          <a
            href={`manage-enquires.php?eid=${number}`}
            onClick={(e) => {
              if (!window.confirm("Do you really want to read?")) {
                e.preventDefault();
              }
            }}
          >
            Pending
          </a>
        </span>
      </td>
    </tr>
  );
}

export default EnquiryRecord;
