import { useState } from "react";
import { Card, ListGroup, Image, Row, Col } from "react-bootstrap";

export default function (props) {
  const [notifications, setNotifications] = useState(props);
  const [pic, setPic] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [timestamp, setTimestamp] = useState(); 

  console.log('notifications', props.notifications); 

  


  return (
    <Card>
      <Card.Header className="fw-bold">Notifications</Card.Header>
      <ListGroup variant="flush">
        { props.notifications.map((data)=> {
          


return (
  <ListGroup.Item key={data.key}>
          <Row>
            <Col className="col-2">
              <Image
                src={data.pic}
                roundedCircle
                className="w-10"
              />
            </Col>
            <Col className="col-7">
              <div className="fw-bold"> {data.title}</div>
              <div>{data.message}</div>
            </Col>
            <Col className="col-3">
              <div className="text-end"> {data.timestamp}</div>
            </Col>
          </Row>
        </ListGroup.Item>

)
        })
        
}
      </ListGroup>
    </Card>
  );
}
