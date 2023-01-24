import { useEffect, useState } from "react";
import { Form, ListGroup } from "react-bootstrap";
import { useResolvedPath } from "react-router-dom";

export default function AddRadio(props) {
  const [active, setActive] = useState(true);
  const [toggle, setToggle] = useState({});
  const [prev, setPrev] = useState();
  const [id, setId] = useState(props.id);
  const alertClicked = () => {
    alert("You clicked the third ListGroupItem");
  };

  function toggleFunction(id) {
    const tempToggle = toggle;
    setId(id);

    if (prev !== id) {
      tempToggle[prev] = false;
      setToggle(tempToggle);
    }

    tempToggle[id] = true;
    setToggle(tempToggle);

    setPrev(id);
  }
  return (
    <Form>
      {props.props.map((data) => {
        return (
            <div key={data.id} className="mb-2">
          <ListGroup >
            
            <ListGroup.Item
              action
              active={toggle[data.id]}
              onClick={(e) => {
                e.preventDefault(); 
                toggleFunction(data.id)}}
              
              
             

            //   href="#link1"
            >
              {/* <div >
                <Form.Check name = 'hello'  id = {data.id} type="radio" reverse/>
              </div> */}
              {data.name}
            </ListGroup.Item>
          </ListGroup>
          </div>
         
        );
      })}
   
    </Form>
  );
}
