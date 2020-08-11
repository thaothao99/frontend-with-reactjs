import React from "react";
import LoginForm from "./login-form";
import "./index.scss";
export default function Login() {
  return (
    <div className="login-container">
      <div className="content">
        <div className="title">
          <h1>Log In</h1>
          <h4>login here using your username and password</h4>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
