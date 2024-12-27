import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "../component/header/Header";

import { useNavigate, useLocation } from "react-router-dom";

export default function SingIn() {
    let navigate = useNavigate();

    const onClick = () => {
        navigate("/main", { bjir: { id: 1 } });
      };

  return (
    <>
      <Header />
      <div
        className="container rounded-3"
        style={{
          width: "60%",
          backgroundColor: "#e5f1f6",
          marginTop: "30px",
          padding: "20px 40px 40px 40px",
        }}
      >
        <p className="" style={{ color: "black", fontSize: "2em" }}>
          Sign In
        </p>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onClick}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
