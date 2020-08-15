import React from "react";
import LoginForm from "./login-form";
import "./index.scss";
import { inject, observer } from "mobx-react";
function LoginComponent(props) {
  const { Store } = props;
  return (
    <div className="login-container">
      <div className="content">
        <div className="title">
          <h1>Log In</h1>
          <h4>login here using your username and password</h4>
        </div>
        <LoginForm Store={Store} />
      </div>
    </div>
  );
}
const Login = inject("Store")(observer(LoginComponent));
export default Login;
