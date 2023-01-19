import { Container, Row, Col } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import AddFile from "../Components/AddFile";
import AddNotifications from "../Components/AddNotifications";
import AddProductionBar from "../Components/AddProductionBar";
import AddTable from "../Components/AddTable";
import Header from "../Components/Header";

export default function Producer() {
  return (
    <>
      <Header />
      <div>
        <p>Producer Dashboard</p>
      </div>
      <Container fluid>
        <Row>
          <Col className="col-7">
            {/* Producer prop below */}

            <div>
              <AddProductionBar
                total="5000000"
                borrowed="2500000"
                culmulative="1000000"
                outstanding="4000000"
                name="John Smith"
              />
            </div>
            <div className="mt-10 ">
              <AddTable />
            </div>
          </Col>
          <Col className="col-5">
            <div className="mt-10 w-100">
              <AddNotifications />
            </div>
            <div>
              <AddFile />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
