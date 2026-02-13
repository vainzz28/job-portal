import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "null");

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <div className="navbar">
      <h2>Job Portal Pro</h2>
      <div>
        <Link to="/">Home</Link>{" | "}
        <Link to="/applications">My Applications</Link>{" | "}
        <Link to="/recruiter">Recruiter</Link>{" | "}
        {!token ? (
          <>
            <Link to="/login">Login</Link>{" | "}
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <span style={{ marginLeft: "10px", marginRight: "10px" }}>
              {user?.name} ({user?.role})
            </span>
            <button onClick={logout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
}
