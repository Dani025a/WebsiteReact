import React, { useState } from "react";

export default function SignUp() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
      e.preventDefault();

      fetch("http://localhost:5000/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          userName,
          fullName,
          phoneNumber,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userSignUp");
          if (data.status === "ok") {
            window.localStorage.setItem("token", data.data);
            window.localStorage.setItem("loggedIn", true);
            window.location.href = "./home";
          } else {
            alert("Something went wrong");
          }
        });
  };

  return (
  <div className="auth-wrapper">
  <div className="auth-inner">
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Full name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Full name"
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Phone</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone number"
          onChange={(e) => setphoneNumber(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
      <p className="forgot-password text-right">
        Already registered <a href="/login">sign in?</a>
      </p>
    </form>
  </div>
</div>
);
}
