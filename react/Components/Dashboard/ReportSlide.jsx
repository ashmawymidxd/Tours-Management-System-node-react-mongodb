import React from "react";

function ReportSlide(props) {
  return (
    <div className="col-md-4 my-5">
      <div className="card p-3 " style={{ height: "23vh" }}>
        <div className="d-flex align-items-center justify-content-between">
          <div
            className="card p-5 bg-primary text-white"
            style={{ marginTop: "-50px" }}
          >
            <i className={props.icone}></i>
          </div>
          <div className="">{props.number}</div>
        </div>
        <hr />
        {props.subtitle}
      </div>
    </div>
  );
}

export default ReportSlide;
