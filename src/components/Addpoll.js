import React, { useState } from "react";
import { Form, Button, Navbar, Container, Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CreateNewPollRequest } from "../redux/action/actions";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./Style/Addpoll.css";

function AddPoll() {
  const [title, settitle] = useState("");
  const [options, setoptions] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddOption = () => {
    setoptions((prevState) => [...prevState, ""]);
  };

  const handleonChangeAddOption = (e, i) => {
    e.preventDefault();
    const data = [...options];
    data[i] = e.target.value;
    setoptions(data);
  };

  const pollstate = useSelector((state) => state.AddPollstatus);
  const handlePollSubmit = () => {
    let poll = {
      title: title,
      options: options,
    };
    dispatch(CreateNewPollRequest(poll));
  };

  const handleRemoveOption = (i) => {
    const data = [...options];
    data.splice(i, 1);
    setoptions(data);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  if (pollstate.isLoading === true) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Button variant="success" onClick={handleLogout}>
          Logout
        </Button>{" "}
      </Navbar>
      <Jumbotron>
        <Container>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className>
                  <h4>Add Poll</h4>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Question here"
                  value={title}
                  onChange={(e) => settitle(e.target.value)}
                />
              </Form.Group>
            </Form>
          </div>
          <br />
          {options.map((option, i) => (
            <div key={i}>
              <div>
                <Form.Label>Option:{i + 1}</Form.Label>
                <div>
                  <Form.Control
                    type="text"
                    placeholder="Enter your option here"
                    value={options[i]}
                    onChange={(e) => handleonChangeAddOption(e, i)}
                  />
                  <span>
                    <Button
                      onClick={() => {
                        handleRemoveOption(i);
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div>
            {title ? (
              options[options.length-1]===""?null:
              <Button 
              type="submit"
              onClick={handleAddOption} variant="primary"
              className="first"
              >
                Add Option
              </Button>
            ) : null}
            {options.length ? (
              <Button 
               onClick={handlePollSubmit} variant="success"
               className="Second"
               >
                Submit Poll
              </Button>
            ) : null }
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default AddPoll;
