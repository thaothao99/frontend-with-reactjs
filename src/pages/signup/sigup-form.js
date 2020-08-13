import React from "react";
import { Input, Form, Button } from "antd";
import {
  UserOutlined,
  KeyOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  FieldStringOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { callApi, showNotification } from "../../api";

export default function SigupForm() {
  const onFinish = (values) => {
    const data = {
      username: values.username,
      password: values.password,
      name: values.name,
      phone: values.phone,
      email: values.email,
    };
    callApi("post", "account/create", data).then((responseData) => {
      return (
        responseData &&
        showNotification(
          "success",
          "Success",
          "Thanks! Your account has been successfully create!"
        )
      );
    });
  };
  return (
    <Form className="login-form" onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your Name!" }]}
      >
        <Input
          prefix={<FieldStringOutlined className="site-form-item-icon" />}
          placeholder="Name (e.g Pikachu)"
        />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          { required: true, message: "Please input your Phone!" },
          {
            pattern: "[0-9]{3}[0-9]{3}[0-9]{4}",
            message: "Please input correct phone number!",
          },
        ]}
      >
        <Input
          placeholder="Phone"
          prefix={<PhoneOutlined className="site-form-item-icon" />}
        ></Input>
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: "Please input your Email!" },
          { type: "email", message: "Please input correct email address" },
        ]}
      >
        <Input
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
        ></Input>
      </Form.Item>
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
        rules={[
          { required: true, message: "Please input your Password!" },
          {
            pattern: "^.{6,}$",
            message: "Password must contain at least 6 character",
          },
        ]}
      >
        <Input.Password
          prefix={<KeyOutlined className="site-form-item-icon" />}
          placeholder="Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item
        name="cofirmPassword"
        rules={[
          { required: true, message: "Please cofirm your Password!" },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                "The password confirmation does not match!"
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<KeyOutlined className="site-form-item-icon" />}
          placeholder="Confirm password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="signup-form-button">
          Sign Up
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to="/login">
          <span className="have-acc-link">Already a member?</span>
        </Link>
      </Form.Item>
    </Form>
  );
}
