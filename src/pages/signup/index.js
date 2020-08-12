import React from "react";
import "../login/index.scss";
import SigupForm from "./sigup-form";
export default function Sigup() {
  return (
    <div className="login-container">
      <div className="content">
        <div className="title">
          <h1>Sign up</h1>
          <h4>create account to become a member</h4>
        </div>
        <SigupForm></SigupForm>
      </div>
    </div>
  );
}
