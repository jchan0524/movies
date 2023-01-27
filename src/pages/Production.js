import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import AddChart from "../Components/AddChart";
import AddDataBlock from "../Components/AddDataBlock";
import AddProgressBar from "../Components/AddProgressBar";
import Header from "../Components/Header";
import ProductionAssets from "../Components/ProductionAssets";
import React from "react";
import CardData from "../Components/CardData";

export default function Production() {
  const [number, setNumber] = useState();

  const data = [
    {
      num: 60,
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
  const info = [{
    ProductionTitle : "Hedge Wars 2: A New Bet",
    TotalBudget : 35000000,
    LoanAmount : 11315000,
    DisburshmentDate : "Feb 1, 2022",
    Term : "12 months",
    InterestRate : "12.5%",
    UnrealizedInterest : 1414375,
    TotalEquity : 12500000,
    TotalCoverage : 63545000,
    Counterparties : "Paramount, Netflix",
    ProductionCompany : "Hat Productions",


  }]

  return (
    <>
      <Container className="d-flex flex-column " fluid>
        <div>
          <Row>
            <Col>Production Dashboard</Col>
            
          </Row>
          <Row>
            <Col>Hedge Wars 2: A New Bet</Col>
          </Row>
          <Row>
            <Col xs={3}>
              <div className="h-50">
                {" "}
                <Card className="pl-20 pr-20 pt-4 pb-20 mt-5 h-auto">
                  <Card.Title className="text-center">
                    Complete Risk Analysis
                  </Card.Title>

                  <AddProgressBar className="mw-100" props={data} />
                </Card>
              </div>
            </Col>
            <Col xs={3}>
              <div className="text-center pb-5">
                {" "}
                <Card className="text-center pl-2 pr-2 mb-3 pt-4 pb-5 mt-5"> <Card.Title> Production Dashboard</Card.Title>
                <AddProgressBar className=' pl-2 pr-2' props={data} />
                </Card >
                <AddDataBlock props={b} />
              </div>
            </Col>
            <Col xs={6} className=" ">
              <div className="">
                <AddChart />
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col xs={6}>
              <div  className="">
                <ProductionAssets />
              </div>
            </Col>

            <Col className="">
              <div className="">
                <CardData props={info}/>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
