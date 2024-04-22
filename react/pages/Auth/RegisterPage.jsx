import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
      setRedirect(true);
    } else {
      alert("registration failed");
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="wrapper-register container-fluid d-flex align-items-center justify-content-center bg-primary">
      <div className="col-md-6 rounded-5 overlay">
        <div className="card p-5 m-5">
          <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input
              type="text"
              className="form-control w-100 my-4 p-3"
              placeholder="username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              required
            />

            <input
              type="email"
              className="form-control w-100 my-4 p-3"
              placeholder="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />

            <input
              type="password"
              className="form-control w-100 my-4 p-3"
              placeholder="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              required
            />
            <button className="btn btn-primary w-100 p-3">Register</button>
          </form>
          <p className="mt-5">
            Have Account ? <Link to={"/Login"}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
