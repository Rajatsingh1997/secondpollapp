import React, { useEffect } from "react";
import {
  Card,
  Button,
  Jumbotron,
  Container,
  Navbar,
  Spinner,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { PollListRequest } from "../redux/action/actions";
import { DeletePollRequest } from "../redux/action/actions";
import { useDispatch, useSelector } from "react-redux";
import "./Style/Dashboard.css";

export default function Dashbord() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(PollListRequest());
  }, []);

  const pollList = useSelector((state) => state.PollListStatus.poll);
    console.log(pollList,"poll list state");

    const pollState = useSelector((state)=>
   state.PollListStatus.isPollfetched
   )
  console.log(pollState, "poll status");

   const deletePoll=(pollId)=>{
     console.log(pollId,"dlete id")
     let poll_ID = {
       id:pollId
     }

   dispatch(DeletePollRequest(poll_ID))
  setTimeout(dispatch(PollListRequest()),500)
   }

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Link to="/addpoll">
          <Button variant="success">Add Poll</Button>{" "}
        </Link>{" "}
        {pollState === false ? (
          <center>
            <Spinner className="spinner" animation="grow" variant="dark" />
          </center>
        ) : null}
        <Link to="/signinfrm">
          <Button variant="success" onClick={handleLogout}>
            Logout
          </Button>{" "}
        </Link>
      </Navbar>
      <Jumbotron>
        <Container>
          {pollList.map((item) => (
            <Card key={item._id}>
              <Card.Body>
                <div>
                  <Card.Title>Title : {item.title}</Card.Title>
                  {item.options.map((option, index) => (
                    <div key={index}>
                      <input type="radio" name={item._id} />
                      <label> {option.option}</label>
                      <label className="float-right">
                        Votes: {option.vote}
                      </label>
                    </div>
                  ))}{}
                </div>
                <hr />
                <Button variant="warning" onClick={()=>history.push(`/editpoll/${item._id}`)}>Edit Poll</Button>{" "}
                <Button variant="danger" onClick={() => deletePoll(item._id)}>
                  Delete Poll
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Jumbotron>
    </div>
  );
}


