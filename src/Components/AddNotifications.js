import { Card, ListGroup, Image, Row, Col } from "react-bootstrap";

export default function (props) {
  return (
    <Card >
      <Card.Header className="fw-bold">Notifications</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
            <Row>
                <Col className='col-2'>
          <Image
            src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
            roundedCircle
            className="w-10"
          />
          
          </Col>
          <Col className="col-7">
          <div className="fw-bold">Admin Message</div>
          <div>New Message about your loan</div>
          </Col>
          <Col className="col-3">
          <div className="text-end">Timestamp</div>
          
          </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}
