import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Badge,
  Navbar,
  Container,
  Jumbotron,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { PollListRequest } from "../redux/action/actions";
import UpdateTitle from "./Updatepoll";
import { UpdatePollTitleRequest } from "../redux/action/actions";
import AddNewOption from "../components/AddNewOption";
import { AddNewOptionRequest } from "../redux/action/actions";
import DeleteOption from "./Deleteoption";
import { DeleteOptionRequest } from "../redux/action/actions";

function EditPoll(props) {
  const [poll, setpoll] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setid] = useState("");
  const [showTitleUpdate, setshowTitleUpdate] = useState(false);
  const [showAddNewOption, setshowAddNewOption] = useState(false);
  const [showDeleteOption, setshowDeleteOption] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  useEffect(() => {
    dispatch(PollListRequest());
    console.log(polltoedit,"111111");
  }, []);

  const pollList = useSelector((state) => state.PollListStatus.poll);

  const pollid = props.match.params.id;

  const polltoedit = pollList.filter((item) => item._id == pollid);

  useEffect(() => {
    setpoll(polltoedit);
  }, [pollList]);

  const handleUpdateTitle = () => {
    let titleUpdate = {
      id: id,
      Title: title,
    };

    if (titleUpdate.title !== "") {
      dispatch(UpdatePollTitleRequest(titleUpdate));
      setshowTitleUpdate(false);
      setTitle("");
      setid("");
    } else {
      setshowTitleUpdate(false);
      setTitle("");
      setid("");
    }
  };

  const _handleshowTitle = (title, id) => {
    setshowTitleUpdate(true);
    setTitle(title);
    setid(id);
  };

  const _handleAddNewOption = (id) => {
    setTitle("");
    setid(id);
    setshowAddNewOption(true);
  };

  const _handleUpdateOption = () => {
    let Optiondata = {
      id: id,
      option: title,
    };
    if (Optiondata.option !== "") {
      dispatch(AddNewOptionRequest(Optiondata));
      setid("");
      setTitle("");
      setshowAddNewOption(false);
    } else {
      setid("");
      setTitle("");
      setshowAddNewOption(false);
    }
  };

  const _handleOptionDelete = (option, id) => {
    setTitle(option.trim());
    setid(id);
    setshowDeleteOption(true);
  };

  const _handleDeletePollOption = () => {
    let optionid = {
      id: id,
      text: title,
    };
    dispatch(DeleteOptionRequest(optionid));
    setshowDeleteOption(false);
    setid("");
    setTitle("");
  };

  return (
    <div>
      <Navbar bg="light" expand="lg" className="box0">
        <Navbar.Brand className="box">Polling Managment System </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

        <Link to="/signinfrm">
          <Button variant="success" onClick={handleLogout}>
            Logout
          </Button>
        </Link>
      </Navbar>

      <Jumbotron>
        <Container>
          <Link to="/dashbord">
            <Button variant="success" style={{ marginBottom: "10px" }}>
              Dashboard
            </Button>
          </Link>
          {poll.map((item) => (
            <Card key={item._id} className="Card">
              <Card.Body>
                <Card.Title>Title :{item.title}</Card.Title>
                {item.options.map((option, i) => (
                  <div key={i}>
                    <input type="radio" name={item._id} />
                    <label>{option.option}</label>
                    <div className="d-flex justify-content-end">
                      <label>
                        <Badge variant="light">{item.__v}</Badge>
                      </label>
                      <Button
                        size={"sm"}
                        onClick={() =>
                          _handleOptionDelete(option.option, item._id)
                        }
                        className="ml-5"
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
                <div>
                  <Button
                    variant="warning"
                    onClick={() => {
                      _handleshowTitle(item.title, item._id);
                    }}
                  >
                    Update Title
                  </Button>

                  <Button
                    onClick={() => {
                      _handleAddNewOption(item._id);
                    }}
                    className="ml-2"
                    variant="primary"
                  >
                    Add Option
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
          <UpdateTitle
            show={showTitleUpdate}
            onCloseModel={() => setshowTitleUpdate(false)}
            title={title}
            onTitleChange={(e) => setTitle(e.target.value)}
            onUpdateTitle={() => {
              handleUpdateTitle();
            }}
          />
          <AddNewOption
            show={showAddNewOption}
            onCloseNewOption={() => setshowAddNewOption(false)}
            onOptionChange={(e) => setTitle(e.target.value)}
            onUpdateOption={() => {
              _handleUpdateOption();
            }}
          />
          <DeleteOption
            show={showDeleteOption}
            option={title}
            onCloseOption={() => setshowDeleteOption(false)}
            onDeletePollOption={() => {
              _handleDeletePollOption();
            }}
          />
        </Container>
      </Jumbotron>
    </div>
  );
}

export default EditPoll;
