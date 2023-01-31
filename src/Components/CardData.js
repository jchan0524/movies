import {  useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function CardData(props) {
  const [key, setKey] = useState(Object.keys(props.props[0]));
  const [val, setVal] = useState(Object.values(props.props[0]));

  function isInt(num) {
    if (Number.isInteger(num)) {
      return "$" + num.toLocaleString("en-US");
    } else {
      return num;
    }
  }
  return (
    <>
      <Card className="pt-4">
        <Container>
          <Card.Title className="ml-4">Loan Profile</Card.Title>
          <Card.Body>
            {key.map((data, index) => {
              return (
                <Row className="text-slate-400">
                  <Col>{key[index].match(/[A-Z][a-z]+|[0-9]+/g).join(" ")}</Col>

                  <Col>{isInt(val[index])}</Col>
                </Row>
              );
            })}
          </Card.Body>
        </Container>
      </Card>
    </>
  );
}
