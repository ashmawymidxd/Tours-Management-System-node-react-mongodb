import React from "react";
import { Content } from "../../Sections/";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { useState } from "react";
import profile from "../../assets/img/profile.png";

function MyProfile() {
  const { userInfo } = useContext(UserContext);
  const [username, setUsername] = useState(userInfo?.username || "");
  const [email, setEmail] = useState(userInfo?.email || "");
  const [updating, setUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  async function updateProfile(ev) {
    ev.preventDefault();
    setUpdating(true);
    setUpdateError(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api/auth/updateProfile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email }),
          credentials: "include",
        }
      );
      if (response.ok) {
        alert("Profile Updated");
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      setUpdateError("Failed to update profile");
    } finally {
      setUpdating(false);
    }
  }

  return (
    <Content>
      <div className="container mt-5" style={{ marginTop: "80px" }}>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-3">
              <div className="card-header">
                <h4>Update Profile</h4>
              </div>
              <form onSubmit={updateProfile}>
                <div className="form-group my-3">
                  <label htmlFor="currentPassword">Username</label>
                  <input
                    type="username"
                    className="form-control p-3"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="currentPassword">Email</label>
                  <input
                    type="email"
                    className="form-control p-3"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary w-100 mt-3 p-3"
                  disabled={updating}
                >
                  {updating ? "Updating..." : "Update"}
                </button>
                {updateError && (
                  <div className="alert alert-danger mt-3">{updateError}</div>
                )}
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">
              <div className="card-header">
                <h4>User Info</h4>
              </div>
              <div className="w-50 my-3">
                <img
                  src={profile}
                  alt="user"
                  className="img-fluid rounded-circle w-50"
                />
              </div>
              <span>Name :- {userInfo?.username}</span> <br />{" "}
              <span>Email :- {userInfo?.email} </span> <br />{" "}
            </div>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default MyProfile;
