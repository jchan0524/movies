import { Card, ProgressBar, Row, Col } from "react-bootstrap";

export default function ProductionAssets(props) {
  return (
    <Card>
      <Card.Title className="text-center fw-bold">
        {" "}
        Production Assets
      </Card.Title>
      <Card.Subtitle>PICTURE</Card.Subtitle>

      <Card.Body>
        <div className="">
          <Row>
            <Col>
              <p>Loan Term</p>
            </Col>
            <Col>
              <p className="text-end">158 days remaining of 200 days</p>
            </Col>
          </Row>

          <ProgressBar
            className="mb-10"
            variant="info"
            now={79}
            key={1}
          ></ProgressBar>
        </div>
        <div>
          <Row>
            <Col>
              <p>Production Calendar</p>
            </Col>
            <Col>
              <p className="text-end">40 Days remaining of 55 days</p>
            </Col>
          </Row>
          <ProgressBar variant="info" now={72} key={2}></ProgressBar>
        </div>
      </Card.Body>
    </Card>
  );
}
