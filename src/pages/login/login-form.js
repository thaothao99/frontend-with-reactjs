import React from "react";
import { Form, Input, Button } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { callApi, showNotification } from "../../api";

export default function LoginForm(props) {
  const { Store } = props;
  const { authentication } = Store;
  const onFinish = (values) => {
    callApi("post", "account/login", values).then((resData) => {
      if (resData) {
        showNotification("success", "Success", "Login successfull!");
        authentication.setToken(resData.token);
      }
    });
  };
  return (
    <Form name="normal_login" className="login-form" onFinish={onFinish}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="@Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<KeyOutlined className="site-form-item-icon" />}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log In
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to="/login">
          <span className="forgot-password-link">Forgot your password?</span>
        </Link>
        <Link to="/signup">
          <Button
            type="primary"
            className="signup-button"
            icon={<UserAddOutlined />}
          >
            Sign up
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
}
