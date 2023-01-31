import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import AddChart from "../Components/AddChart";
import AddDataBlock from "../Components/AddDataBlock";
import AddProgressBar from "../Components/AddProgressBar";

import ProductionAssets from "../Components/ProductionAssets";
import React from "react";
import CardData from "../Components/CardData";

export default function Production() {


  const data = [
    {
      num: 90,
    },
  ];

  const b = [
    {
      id: 1,
      coverageRatio: 5.6,
      equityToDebt: 1.1,
      interestRate: 12.5,
      LTV: 32.3,
    },
  ];
  const info = [
    {
      ProductionTitle: "Hedge Wars 2: A New Bet",
      TotalBudget: 35000000,
      LoanAmount: 11315000,
      DisburshmentDate: "Feb 1, 2022",
      Term: "12 months",
      InterestRate: "12.5%",
      UnrealizedInterest: 1414375,
      TotalEquity: 12500000,
      TotalCoverage: 63545000,
      Counterparties: "Paramount, Netflix",
      ProductionCompany: "Hat Productions",
    },
  ];

  function status(data) {
    if (data < 40) {
      return <p>Danger</p>;
    } else if (data < 60) {
      return <p>Warning</p>;
    } else {
      return <p>Healthy</p>;
    }
  }

  return (
    <>
      <style type="text/css">
        {`
    .bg-teal {
        background-color: #0dcaf0!important;
    `}
      </style>
      <Container className="d-flex flex-column h-100" fluid>
        <div>
          <Row>
            <Col>Production Dashboard</Col>
          </Row>
          <Row>
            <Col>Hedge Wars 2: A New Bet</Col>
          </Row>
          <Row>
            <Col className="d-flex" xs={3}>
              <div>
                <Card className=" h-75  pl-5 pr-5 pt-4  mt-5">
                  <Card.Title className="text-center">
                    <h4>Completion Risk Analysis</h4>
                  </Card.Title>
                  <div className="mt-10 ">
                    <AddProgressBar props={data} />
                    <div className="mt-2 text-center text-primary fs-4">
                      {data[0].num}
                    </div>
                    <div className="text-center">{"AAA"}</div>
                    <Row>
                      <Col className="g-0 text-center">
                        <p className="mt-10">
                          <Badge pill bg="success">
                            {" "}
                          </Badge>{" "}
                          Low
                        </p>
                      </Col>
                      <Col className="g-0 text-center">
                        <p className=" mt-10">
                          <Badge pill bg="warning">
                            {" "}
                          </Badge>
                          Medium
                        </p>
                      </Col>
                      <Col className="g-0 text-center">
                        <p className="mt-10">
                          <Badge pill bg="danger">
                            {" "}
                          </Badge>{" "}
                          High
                        </p>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </div>
            </Col>
            <Col xs={3}>
              <div className="text-center pb-5">
                {" "}
                <Card className="text-center pl-2 pr-2 mb-3 pt-4 pb-5 mt-5">
                  {" "}
                  <Card.Title> Production Dashboard</Card.Title>
                  <AddProgressBar className="pl-2 pr-2" props={data} />
                  {status(data[0].num)}
                </Card>
                <AddDataBlock props={b} />
              </div>
            </Col>
            <Col xs={6} className=" ">
              <div>
                <AddChart />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <div>
                <ProductionAssets />
              </div>
            </Col>
            <Col>
              <div>
                <CardData props={info} />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
