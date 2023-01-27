import { Button, Modal,Form, Row, Col } from "react-bootstrap";
import { useState } from "react";

export default function Editlog(){

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    return(
        <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
       
        {/* <Modal.Header  > */}
       
          {/* <Modal.Title > */}
          <div className="text-center">
            <Row>
              <Col>
            FilmHedge
            </Col>
            </Row>
            <Row>
              <Col>
            Welcome to FilmHedge
            </Col>
            </Row>
            
            <Row>
              <Col>
            Login to Continue
            </Col>
            </Row>
            {/* </Modal.Title> */}
            </div>
            
        
        {/* </Modal.Header> */}
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div className="">

          <Row >
          <Col><button>Forgot Passord?</button></Col>
            
            <Col className="d-flex justify-content-end">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  className="d-flex justify-content-end" variant="primary" onClick={handleClose}>
            Sign In
          </Button>
          </Col>
          </Row>
         
            <div className="text-center">
          <p >New User? <button>Create an account</button></p>
          
          </div>
         
          </div>
     
      </Modal>
    </>
    )
}