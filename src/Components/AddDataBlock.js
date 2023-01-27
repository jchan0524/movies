import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function AddDataBlock(props) {
  const [display, setDisplay] = useState();
  console.log(props); 


  return (

    props.props.map((data)=> {
        console.log(data)
        return(
            <div className="mh-100" key={data.id} >
            <Row>
      <Col className="g-0 h-75 ml-3">
        <Card>
          <Card.Title>Coverage Ratio</Card.Title>
          <Card.Body>{data.coverageRatio + ":1"}</Card.Body>
        </Card>
        <Card>
          <Card.Title>Equity To Debt</Card.Title>
          <Card.Body>{data.equityToDebt + ":1" }</Card.Body>
        </Card>
      </Col>
      <Col  >
        <Card>
          <Card.Title>Interest Rate</Card.Title>
          <Card.Body>{data.interestRate + "%" }</Card.Body>
        </Card>
        <Card>
          <Card.Title>LTV</Card.Title>
          <Card.Body>{data.LTV + "%"}</Card.Body>
        </Card>
      </Col>
    </Row>
    </div>


        )
    })
    
    
  );
}
