import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function CardData(props) {
  const [key, setKey] = useState(Object.keys(props.props[0]));
  const [val, setVal] = useState(Object.values(props.props[0]));

  return (
    <>
      <Card>
        <Card.Title>Loan Profile</Card.Title>
        <Card.Body>
          {key.map((data, index) => {
            return (
              <Row>
                <Col>{key[index].match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Col>
                <Col>{val[index]}</Col>
              </Row>
            );
          })}
        </Card.Body>
      </Card>
    </>
  );
}
