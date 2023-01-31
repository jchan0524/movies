import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Editlog() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);


  return (
    <>
      <style type="text/css">
        {`
    .btn-flat {
      background-color: rgb(6 182 212);
      
      color: white;
    }
    .btn-flat:hover {
      background-color:  rgb(14 116 144);
      
      color: white;
    }
    `}
      </style>

      <Modal show={show} backdrop="static" onHide={handleClose}>
        <div className="mt-4 text-center">
          <Row>
            <Col>
              <h1>FilmHedge</h1>
            </Col>
          </Row>
          <Row>
            <Col className="fw-bold">
              <h3>Welcome to FilmHedge</h3>
            </Col>
          </Row>

          <Row>
            <Col className="fw-lighter">Login to Continue</Col>
          </Row>
        </div>

        <div className="ml-2 mr-2">
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3 ">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  className="border border-info rounded"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="border border-info"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <div className="d-flex">
            <Col xs={8}>
              <button className="text-slate-400 fs-50 mt-2 ml-4">
                Forgot Passord?
              </button>
            </Col>

            <Col className="">
              <Button
                className=" ml-2"
                size="lg"
                variant="flat"
                onClick={handleClose}
              >
                Sign In
              </Button>
            </Col>
          </div>

          <div className="text-center  mt-5 pb-20">
            <p>
              New User?{" "}
              <button className="text-cyan-500">Create an account</button>
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
}
