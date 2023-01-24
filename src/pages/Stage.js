import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import AddDocument from "../Components/AddDocument";
import AddRadio from "../Components/AddRadio";
import Dropzone from "../Components/Dropzone";

export default function Stage() {
  const [toggle, showToggle] = useState();

  const Users = [
    { id: 1, name: "Development" },
    { id: 2, name: "Pre-Production" },
    { id: 3, name: "Production" },
    { id: 4, name: "Post" },
  ];

  return (
    <>
      <Container className="h-100" fluid>
      <Row className="mt-4 ml-4">
        <Col className="vh-100 d-flex flex-column h-100" xs={6}>
       
            <p className="fw-bold">What Stage is production in currently?</p>
            <AddRadio toggle={toggle} props={Users} />
            <Col className="mt-20">
            <div className=" mb-5">
            <Form>
                
              {/* <Form.Group > */}
                <Form.Label className="fw-bold">
                  How much equity has been raised by the production?
                </Form.Label>
                <Form.Control type="number" placeholder="ex. $100,000" />
                
<div className="mt-20">
                <Form.Label className="fw-bold">
                  From which States has the production recieved tax credit
                  approval letters?
                </Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="ex. Georgia and California"
                />
              {/* </Form.Group> */}
             
            </Form>
            </div>
          </Col>
      
        </Col>

        <Col className="mt-4 w-100">
          
            <p className="fw-bold">Document upload</p>
            <AddDocument className="h-10 pb-30" />
            <Button className="mt-10 w-100 mx-auto d-block " variant="primary">
              {" "}
              Save Changes{" "}
            </Button>
      
        </Col>
      </Row>
      
       
      </Container>
    </>
  );
}
