import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Header from "../component/header/Header";

export default function SingUp() {
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
          Sign Up
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
