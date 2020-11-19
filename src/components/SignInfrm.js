import React, { useState,useEffect } from "react";
import "./Style/SignInfrm.css";
import { Navbar, Button,Form,Spinner, Container } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import { SignInRequest } from "../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";

export default function SignInfrm(props) {

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history =useHistory();

  const loginState = useSelector((state) =>  state.LoginStatus);

  const handleSubmit = () => {
    let loginData = {
      username: user.trim(),
      password: password.trim(),
    };
    console.log(loginData);

    dispatch(SignInRequest(loginData));   // ( SignInrequest comes from action )   
    setUser("");
    setPassword("");
  };

  useEffect(() => {

    if (localStorage.getItem("token")) {
      if (loginState?.response?.toLowerCase() === "admin") {
        props.history.push("/dashboard");
        localStorage.setItem("userType", loginState.response.role);
      } else if (loginState?.response?.toLowerCase() === "guest") {
        props.history.push("/success");
        localStorage.setItem("userType",loginState.response);
      } else {
        localStorage.clear();
        props.history.push("/");
      }
    }
    },[loginState.response]);

  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/signupform">
          <Button variant="success">SignUp</Button>{" "}
        </Link>
      </Navbar>
      <div className="formshow">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
              type="text"
              placeholder="user name"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <Button
              variant="primary"
              type="submit"
              disabled={user && password ? false : true}
              onClick={handleSubmit}
            >
             {loginState.isLoading === true ? (
                <Spinner
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                <span>Login</span>
              )}
            </Button>
            <Container>
          {loginState.isSignedIn ? null : (
                <h6 style={{ color: "Red" }}>{loginState.error}</h6>
              )}

        </Container>
        </Form>
      </div>
    </div>
  );
}
