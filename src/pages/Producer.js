import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import AddFile from "../Components/AddFile";
import AddNotifications from "../Components/AddNotifications";
import AddProductionBar from "../Components/AddProductionBar";
import AddTable from "../Components/AddTable";
import Header from "../Components/Header";
import { Link } from "react-router-dom";

export default function Producer() {
  const money = [
    {
      key: 1,
      date: "18 Nov 2022",
      amount: 500000,
      loan: 5000000,
      balance: 4000000,
    },
    {
      key: 2,
      date: "2 Oct 2022",
      amount: 250000,
      loan: 5000000,
      balance: 4500000,
    },
    {
      key: 3,
      date: "20 Apr 2022",
      amount: 100000,
      loan: 5000000,
      balance: 4750000,
    },
    {
      key: 4,
      date: "20 Apr 2022",
      amount: 100000,
      loan: 5000000,
      balance: 4750000,
    },
    {
      key: 5,
      date: "20 Apr 2022",
      amount: 100000,
      loan: 5000000,
      balance: 4750000,
    },
  ];
  const notifications = [
    {
      key: 1,
      pic: "https://www.bethesdaheadshots.com/wp-content/uploads/2021/06/JONATHAN_5022P_ppFIN.jpg",
      message: "hello there",
      timestamp: "3:04",
      title: "Glover P. Donald",
    },
    {
      key: 2,
      pic: "https://tv-fanatic-res.cloudinary.com/iu/s--EaKVdcUp--/t_xlarge_p/cs_srgb,f_auto,fl_strip_profile.lossy,q_auto:420/v1371210712/parvati-shallow-picture.png",
      message: "Parvati was Robbed",
      timestamp: "9:02",
      title: "Parvati Shallow",
    },
    {
      key: 3,
      pic: "http://media.gettyimages.com/id/112363611/photo/palau-finale-and-reunion-show-departures.jpg?s=594x594&w=125&k=20&c=OKWaUzm9pzKYs-zz3QL2sQfleg6WKuCc92yJ-Z9de1g=",
      message: "Survivor is a good show",
      timestamp: "12:30",
      title: "Tom Westman",
    },
  ];
  const file = [
    {
      key: 1,
      link: "https://play-lh.googleusercontent.com/emmbClh_hm0WpWZqJ0X59B8Pz1mKoB9HVLkYMktxhGE6_-30SdGoa-BmYW73RJ8MGZQ",
    },
    {
      key: 2,
      link: "/home",
    },
  ];

  return (
    <>
      
      <div>
        <p>Producer Dashboard</p>
      </div>
      <Container fluid>
        <Row>
          <Col className="col-7" >
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
            <div
              style={{ overflowY: "auto", maxHeight: "250px" }}
              className="mt-10 "
            >
              <AddTable money={money} />
            </div>
          </Col>
          <Col className="col-5">
            <div className="mt-10 w-100">
              <AddNotifications notifications={notifications} />
            </div>
            <div>
              <Row>
                <Col>
                  <div className="mt-10">
                    <AddFile file={file} />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
