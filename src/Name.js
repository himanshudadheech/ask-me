import React from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./name.css";

function Name() {
  const [name, setName] = useState("");

  let navigate = useNavigate();

  const remove = () => {
    // localStorage.removeItem("userName");
    sessionStorage.removeItem("userName");
  };
  //  handle yes button

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const validateForm = () => {
    // if (localStorage.getItem("username") != null) {

    if (name === "" || name == null) {
      //   alert("Name must be filled out");
      handleShow();

      //   localStorage.removeItem("userName");
      sessionStorage.removeItem("userName");
      return false;
    } else {
      //   localStorage.removeItem("userName");

      //   alert("Code has accepted : you can try another");

      //   localStorage.setItem("userName", name);
      sessionStorage.setItem("userName", name);

      navigate("/Main");
      return true;
    }

    // }
  };

  return (
    <>
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <div id="login-form" className="form">
                  <h3 className="text-center text-info">Welcome</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Name:
                    </label>
                    <br />
                    <input
                      placeholder="Name"
                      value={name}
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                    <Modal
                      show={show}
                      onHide={handleClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Alert</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>Please Fill Your Name</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Okay
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    <p className="rq">*Required Field</p>
                    <button type="submit" onClick={validateForm}>
                      Next
                    </button>
                    <button type="submit" onClick={remove}>
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Name;
