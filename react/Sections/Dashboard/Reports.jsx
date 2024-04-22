import React, { useState, useEffect } from "react";
import { ReportSlide } from "../../Components";

function Reports() {
  const [userCount, setUserCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [enquiryCount, setEnquiryCount] = useState(0);
  const [packageCount, setPackageCount] = useState(0);
  const [issueCount, setIssueCount] = useState(0);

  useEffect(() => {
    async function fetchUserCount() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/auth/getAllUsers"
        );
        const data = await response.json();
        setUserCount(data.length); // Assuming the API returns an array of users
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    }
    fetchUserCount();
  }, []);

  useEffect(() => {
    async function fetchBookingCount() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/booking/getAllBookings"
        );
        const data = await response.json();
        setBookingCount(data.length); // Assuming the API returns an array of bookings
      } catch (error) {
        console.error("Error fetching booking count:", error);
      }
    }
    fetchBookingCount();
  }, []);

  useEffect(() => {
    async function fetchEnquiryCount() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/enquiry/getEnquiries"
        );
        const data = await response.json();
        setEnquiryCount(data.length); // Assuming the API returns an array of enquiries
      } catch (error) {
        console.error("Error fetching enquiry count:", error);
      }
    }
    fetchEnquiryCount();
  }, []);

  useEffect(() => {
    async function fetchPackageCount() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/package/getPackages"
        );
        const data = await response.json();
        setPackageCount(data.length); // Assuming the API returns an array of packages
      } catch (error) {
        console.error("Error fetching package count:", error);
      }
    }
    fetchPackageCount();
  }, []);

  useEffect(() => {
    async function fetchIssueCount() {
      try {
        const response = await fetch(
          "http://localhost:4000/api/issue/getIssues"
        );
        const data = await response.json();
        setIssueCount(data.length); // Assuming the API returns an array of issues
      } catch (error) {
        console.error("Error fetching issue count:", error);
      }
    }
    fetchIssueCount();
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row p-0">
          <ReportSlide
            icone={"fa-solid fa-user fa-2xl"}
            subtitle={"Users"}
            number={userCount.toString()}
          />
          <ReportSlide
            icone={"fa-solid fa-book fa-2xl"}
            subtitle={"Bookings"}
            number={bookingCount.toString()}
          />
          <ReportSlide
            icone={"fa-solid fa-toolbox fa-2xl"}
            subtitle={"Enquiries"}
            number={enquiryCount.toString()}
          />
          <ReportSlide
            icone={"fa-solid fa-list-check fa-2xl"}
            subtitle={"Total packages"}
            number={packageCount.toString()}
          />
          <ReportSlide
            icone={"fa-solid fa-box-tissue fa-2xl"}
            subtitle={"Issues Raised"}
            number={issueCount.toString()}
          />
        </div>
      </div>
    </div>
  );
}

export default Reports;
