import { useEffect, useState } from "react";
import { ProgressBar, Row, Card, Table, Col, Container } from "react-bootstrap";

export default function InvestorDashboard() {
  const investorData = [
    {
      ProductionName: "A Loud Place",
      TotalBudget: 40000000,
      TotalLoan: 8000000,
      DateOfFunding: "18 Apr 2022",
      Term: "12 months",
      InterestRate: '12.5%',
      InterestDue: "18 Apr 2023",
      Progress: '75%',
      Risk: "Low",
    },
    {
      ProductionName: "Chronicles of Narnia",
      TotalBudget: 45961246,
      TotalLoan: 3000000,
      DateOfFunding: "18 Apr 2022",
      Term: "12 months",
      InterestRate: '12%',
      InterestDue: "18 Apr 2023",
      Progress: '28%',
      Risk: "High",
    },
    {
      ProductionName: "Traffic Cop 5",
      TotalBudget: 30500000,
      TotalLoan: 2800000,
      DateOfFunding: "20 May 2022",
      Term: "12 months",
      InterestRate: '12%',
      InterestDue: "20 May 2023",
      Progress: '90%',
      Risk: "Medium",
    },
    {
      ProductionName: "Happy Rabbits",
      TotalBudget: 60000000,
      TotalLoan: 3000000,
      DateOfFunding: "12 Jul 2022",
      Term: "9 months",
      InterestRate: '20%',
      InterestDue: "12 Apr 2023",
      Progress: '50%',
      Risk: "Low",
    },
    {
      ProductionName: "Alf: The Movie",
      TotalBudget: 15100000,
      TotalLoan: 1500000,
      DateOfFunding: "12 Jul 2022",
      Term: "9 months",
      InterestRate: '13%',
      InterestDue: "12 Apr 2023",
      Progress: '50%',
      Risk: "Low",
    },
    {
      ProductionName: "Miles Morales: Spiderman",
      TotalBudget: 100000000,
      TotalLoan: 10000000,
      DateOfFunding: "12 Jul 2022",
      Term: "9 months",
      InterestRate: '5%',
      InterestDue: "12 Apr 2023",
      Progress: '50%',
      Risk: "Low",
    },
  ];
  console.log("hello", investorData.length);
  const [key, setKey] = useState({});
  const [val, setVal] = useState({});

  function a() {
    investorData.map((data, index) => {
      console.log("boo", data);
      console.log("eyes", Object.values(data));
      Object.values(data).map((data) => {
        console.log(data);
      });
    });
  }

  return (
    <>
      <Container fluid>
        <Row>
          <p>Investor Dashboard</p>
          <h4>Coromandal Capital</h4>
        </Row>
      </Container>
      <Container fluid className="">
        <Card className="mt-3 p-4">
          <Row>
            <Col>
              <p>Committed Capital / Dropdowns</p>
            </Col>
            <Col>
              <p className="text-end">40000000 (of $50000000)</p>
            </Col>

            <ProgressBar className=" " now={80} />
          </Row>
        </Card>
        <Card className="mt-3 p-4">
          <Row>
            <Col>
              <p>Amount Dashboard</p>
            </Col>
            <Col>
              <p className="text-end">30500000 (of $50000000)</p>
            </Col>

            <ProgressBar className=" " now={61} />
          </Row>
        </Card>
        <Card className="mt-3 p-4">
          <Row>
            <Col>
              <p>Earning YTD</p>
            </Col>
            <Col>
              <p className="text-end">25000000</p>
            </Col>

            <ProgressBar className=" " now={50} />
          </Row>
        </Card>
      </Container>
      <Container fluid className="mt-3">
        <div>
      <Card>
        <Table>
          <thead>
            <tr>
              {Object.keys(investorData[0]).map((data) => {
                return <th>{data}</th>;
              })}
            </tr>
          </thead>

          <tbody>
            {investorData.map((data) => {
              console.log("boo", data);

              console.log("eyes", Object.values(data));

              let c = Object.values(data).map((i) => {
                return <td>{i}</td>;
              });
              return <tr>{c}</tr>;
            })}
          </tbody>
        </Table>
      </Card>
      </div>
      </Container>
    </>
  );
}
