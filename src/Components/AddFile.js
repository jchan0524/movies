import { Card } from "react-bootstrap";

export default function AddFile(){
    return(
<Card >
      <Card.Body>
        <Card.Title>Documents</Card.Title>
        
        <Card.Text>
          Documents go here
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    ); 
}