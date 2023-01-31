import { useState } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import AddDocument from "../Components/AddDocument";
import AddRadio from "../Components/AddRadio";

export default function Stage() {
  const [toggle] = useState();

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
          <Col className="" xs={6}>
            <p className="fw-bold">What Stage is production in currently?</p>
            <AddRadio toggle={toggle} props={Users} />
            <Col className="mt-4">
              <div className=" mb-2">
                <Form>
                  <Form.Label className="fw-bold">
                    How much equity has been raised by the production?
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="ex. $100,000"
                    className="p-3 border border-primary rounded text-center"
                  />

                  <div className="mt-4">
                    <Form.Label className="fw-bold">
                      From which States has the production recieved tax credit
                      approval letters?
                    </Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="ex. Georgia and California"
                    className="p-3 border border-primary rounded text-center"
                  />
                </Form>
              </div>
            </Col>
          </Col>

          <Col className="w-100">
            <p className="fw-bold">Document upload</p>
            <Card>
              <AddDocument className="h-10 " />
            </Card>
            <Button
              className="d-grid gap-2 mt-10 w-100 mx-auto d-block "
              size="lg"
              variant="primary"
            >
              {" "}
              Save Changes{" "}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
