import { Col, Row, ProgressBar } from "react-bootstrap";
import AddDocument from "../Components/AddDocument";
import AddFile from "../Components/AddFile";
import AddNotifications from "../Components/AddNotifications";

export default function DocumentUpload() {
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

  return (
    <>
      <Row>
        <p>Document Upload</p>
      </Row>
      <Row>
        <Col xs={8}>
          <Col>
            <p>Hedge Wars 2: A New Bet</p>
          </Col>

          <Col>
            <ProgressBar striped variant="danger" now={48} key={3} />
          </Col>
          <Row>
            <Col>
              <AddDocument />
            </Col>
            <Col>
              <AddDocument />
            </Col>
            <Col>
              <AddDocument />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddDocument />
            </Col>
            <Col>
              <AddDocument />
            </Col>
            <Col>
              <AddDocument />
            </Col>
          </Row>
        </Col>
        <Col>
          <AddNotifications notifications={notifications} />
        </Col>
      </Row>
    </>
  );
}
