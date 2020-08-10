import React from "react";
import LoginForm from "./login-form";
import "./index.scss";
export default function Login() {
  return (
    <div className="login-container">
      <div>
        <div>
          <h1>Log In</h1>
          <p>login here using your username and password</p>
          <div className="arrow-up "></div>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
