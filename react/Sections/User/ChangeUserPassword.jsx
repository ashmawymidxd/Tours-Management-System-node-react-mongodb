import React, { useState } from "react";

function ChangeUserPassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/updatePassword",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ currentPassword, newPassword }),
          credentials: "include",
        }
      );

      if (response.ok) {
        setSuccess(true);
        setError(null);
      } else {
        const data = await response.json();
        setError(data.error || "Failed to change password");
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred while changing password");
      setSuccess(false);
    }
  }

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <h4 className="card-header">Change Password</h4>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group my-3">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="currentPassword"
                  placeholder="Enter Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="newPassword"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control p-3"
                  id="confirmPassword"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3 p-3">
                Change Password
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
              {success && (
                <div className="alert alert-success mt-3">
                  Password changed successfully
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangeUserPassword;
