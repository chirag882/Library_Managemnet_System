import React from "react";
import { Button, Form, Input } from "antd"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {

  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/login", values);
      console.log(response.data.data);
      if (response.data.success) {
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-from card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Button
            className="primary-button my-2 full-width-button"
            htmlType="submit"
          >
            Login
          </Button>
          <Link to="/register" className="anchor mt-2">
            Register
          </Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;