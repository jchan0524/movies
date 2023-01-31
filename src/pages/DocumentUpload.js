import { Col, Row, ProgressBar, Card, Container } from "react-bootstrap";
import AddDocument from "../Components/AddDocument";

import AddNotifications from "../Components/AddNotifications";

export default function DocumentUpload() {
  const data = {
    num: 48,
  };

  const notifications = [
    {
      key: 1,
      pic: "https://www.bethesdaheadshots.com/wp-content/uploads/2021/06/JONATHAN_5022P_ppFIN.jpg",
      message: "hello there",
      timestamp: "3:04",
      title: "Glover P. Donald",
    },
    {
      key: 2,
      pic: "http://simpleicon.com/wp-content/uploads/user1.png",
      message: "Parvati was Robbed",
      timestamp: "9:02",
      title: "Parvati Shallow",
    },
    {
      key: 3,
      pic: "http://simpleicon.com/wp-content/uploads/user1.png",
      message: "Survivor is a good show",
      timestamp: "12:30",
      title: "Tom Westman",
    },
  ];

  return (
    <>
      <Container fluid>
        <Row>
          <p>Document Upload</p>
        </Row>
        <Row>
          <Col xs={8}>
            <Col>
              <Row>
                <Col xs={8}>
                  <h4>Hedge Wars 2: A New Bet</h4>
                </Col>
                <Col>
                  <h4 className="text-end">{data.num + "%"}</h4>
                </Col>
              </Row>
            </Col>

            <Col>
              <Col>
                <ProgressBar variant="" now={data.num} key={3} />
              </Col>
              <Row className="mt-4">
                <Col>
                  <Card>
                    <Card.Title className="text-center">
                      Corporate Formation Documents
                    </Card.Title>

                    <AddDocument />
                  </Card>
                </Col>

                <Col>
                  <Card>
                    <Card.Title className="text-center">
                      Tax Credit Documents
                    </Card.Title>
                    <AddDocument />
                  </Card>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Card>
                    <Card.Title className="text-center">
                      Production Schedule and Budget
                    </Card.Title>
                    <AddDocument />
                  </Card>
                </Col>
                <Col>
                  <Card>
                    <Card.Title className="text-center">
                      Production Schedule and Budget
                    </Card.Title>
                    <AddDocument />
                  </Card>
                </Col>
              </Row>
            </Col>
            <Row className="mt-4">
              <Col>
                <Card>
                  <Card.Title className="text-center">
                    Closed Funding and Documents{" "}
                  </Card.Title>
                  <AddDocument />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Title className="text-center">
                    Cast and Talent Attachment Documents
                  </Card.Title>
                  <AddDocument />
                </Card>
              </Col>
            </Row>
          </Col>
          <Col>
            <Card>
              <Card.Title className="fw-bold pt-4 pl-5">
                Notifications
              </Card.Title>
              <AddNotifications notifications={notifications} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
