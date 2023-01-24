import { ProgressBar, Col, Row, Button, Container, Card } from "react-bootstrap";
import { useState, react, useEffect } from "react";

export default function AddProductionBar(props) {
  const [borrowed, setBorrowed] = useState(props.borrowed);
  const [outstanding, setOutstanding] = useState(props.outstanding);
  const [culmulative, setCulmulative] = useState(props.culmulative);
  const [total, setTotal] = useState(props.total);
  const [isLoading, setLoading] = useState(false);
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  function updateBar(borrowed, outstanding, culmulative, total) {
    setBorrowed(borrowed);
    setOutstanding(outstanding);
    setCulmulative(culmulative);
    setTotal(total);
  }
  function computeAverage(amount, total) {
    return (amount / total) * 100;
  }

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <>
      <h1>{props.name} Productions </h1>
      <Container fluid>
        <Card className="pr-10 pl-5">
        <Row className>
          <Col>
            <div className="text-start">Amount Borrowed / Drawdowns</div>

            <div className="text-end">
              {borrowed
                ? borrowed + " (of " + total+ ")"
                : null
                ? total.toLocaleString("en-US")
                : null}{" "}
               
            </div>

            <ProgressBar
              className="mb-2 background-white"
              animated
              now={computeAverage(borrowed, total)}
            />

            <div className="text-start">Amount Outstanding</div>
            <div className="text-end">
              {outstanding + " (of " + total + ")"}
            </div>
            <ProgressBar
              className="mb-2"
              animated
              now={computeAverage(outstanding, total)}
            />
            <Col>
              <div className="text-start">Culmulative Payments</div>
              <div className="text-end">
                {culmulative + " (of " + total + ")"}
              </div>
              <ProgressBar
                className="mb-2"
                animated
                now={computeAverage(culmulative, total)}
              />
            </Col>

            
          </Col>
        </Row>
        </Card>
        <Button
              variant="primary"
              disabled={isLoading}
              size="md"
              className="d-grid gap-2 p-200 w-100 mt-8"
              onClick={!isLoading ? handleClick : null}
            >
              {isLoading ? "Loading…" : "Make a Payment"}
            </Button>
      </Container>
    </>
  );
}
