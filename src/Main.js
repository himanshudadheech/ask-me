import React, { useEffect, useState } from "react";
import "./main.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function Main() {
  const [button, setButton] = useState("");
  const handleClick = () => {
    setButton(document.getElementById("btn2"));
  };
  useEffect(() => {
    handleClick();
    // since we are using state, we have to pass it as a dependency
  }, [button]);

  if (button) {
    button.addEventListener("mouseover", function () {
      button.style.left = `${Math.ceil(Math.random() * 90)}%`;
      button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    });
    button.addEventListener("click", function () {
      alert("No");
    });
  }

  //  handle yes button

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <p className="text-center" style={{ color: "white", fontSize: "55px" }}>
          Can We hang out soon {sessionStorage.getItem("userName")} ?
        </p>
        <img
          src="https://media.tenor.com/zGm5acSjHCIAAAAM/cat-begging.gif"
          alt="cat-img"
        />
        <button id="btn1" onClick={handleShow}>
          YES Himanshu!
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>
              YAYY! Thank You {sessionStorage.getItem("userName")}{" "}
            </Modal.Title>
          </Modal.Header>
          {/* <Modal.Body>
            YAYY! Thank You {sessionStorage.getItem("userName")}
          </Modal.Body> */}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              See You Soon Himanshu
            </Button>
          </Modal.Footer>
        </Modal>
        <button id="btn2">NO</button>
      </div>
    </>
  );
}

export default Main;
