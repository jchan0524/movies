import { ListGroup, Image, Row, Col } from "react-bootstrap";

export default function AddNotifications(props) {
  return (
    <ListGroup variant="flush">
      {props.notifications.map((data) => {
        return (
          <ListGroup.Item key={data.key}>
            <Row>
              <Col className="col-2">
                <Image src={data.pic} roundedCircle className="w-10" />
              </Col>
              <Col className="col-7">
                <div className="fw-bold"> {data.title}</div>
                <div>{data.message}</div>
              </Col>
              <Col className="col-3">
                <div className="text-end"> {data.timestamp}</div>
              </Col>
            </Row>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}
