import { useState } from "react";
import { Form, ListGroup } from "react-bootstrap";

export default function AddRadio(props) {
  const [toggle, setToggle] = useState({});
  const [prev, setPrev] = useState();
  const [, setId] = useState(props.id);

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
            <ListGroup>
              <ListGroup.Item
                className="p-3"
                action
                active={toggle[data.id]}
                onClick={(e) => {
                  e.preventDefault();
                  toggleFunction(data.id);
                }}
              >
                {data.name}
              </ListGroup.Item>
            </ListGroup>
          </div>
        );
      })}
    </Form>
  );
}
