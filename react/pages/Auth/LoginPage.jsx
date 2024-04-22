import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import "./css/login.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        if (userInfo.role === "admin") {
          setRedirect("admin");
        } else {
          setRedirect("user");
        }
      });
    } else {
      alert("wrong credentials");
    }
  }

  if (redirect === "user") {
    return <Navigate to={"/gest/home"} />;
  }
  if (redirect === "admin") {
    return <Navigate to={"/dashboard/Home"} />;
  }
  return (
    <div className="wrapper-login container-fluid d-flex align-items-center justify-content-center bg-primary">
      <div className=" col-md-6 rounded-5 overlay">
        <div className="card p-5 m-5">
          <form onSubmit={login}>
            <h1>Login</h1>
            <input
              className="form-control w-100 my-4 p-3"
              type="text"
              placeholder="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <input
              className="form-control w-100 my-4 p-3"
              type="password"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button className="btn btn-primary w-100 p-3">Login</button>
          </form>
          <p className="mt-5">
            Don't Have Account ? <Link to={"/Register"}>Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
