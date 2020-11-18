import React from "react";
import { Navbar, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/">
          <Button variant="success">Login</Button>{" "}
        </Link>
      </Navbar>
      <div className="formshow">
        
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control type="text" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Control as="select" size="lg"  className="bot">
          <Form.Label>User type</Form.Label>
          <option>Guest</option>
          <option>Admin</option>
          </Form.Control>
          <Button variant="primary" type="submit" className="pop">
            Register
          </Button>
        </Form>
      </div>
    </div>
  );
}
