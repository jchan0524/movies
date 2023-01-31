import { Card, Row, Col } from "react-bootstrap";

export default function AddDataBlock(props) {
  return props.props.map((data) => {
    console.log(data);
    return (
      <div key={data.id}>
        <Row>
          <Col className="g-0 ml-3">
            <Card>
              <Card.Title>Coverage Ratio</Card.Title>
              <p className="text-primary fs-1">{data.coverageRatio + ":1"}</p>
            </Card>
            <Card>
              <Card.Title>Equity To Debt</Card.Title>
              <p className="text-primary fs-1">{data.equityToDebt + ":1"}</p>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Title>Interest Rate</Card.Title>
              <p className="text-primary fs-1">{data.interestRate + "%"}</p>
            </Card>
            <Card>
              <Card.Title>LTV</Card.Title>
              <p className="text-primary fs-1">{data.LTV + "%"}</p>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </div>
    );
  });
}
