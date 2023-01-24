import { useState } from "react";
import { Card, Col, Row, Image, Container, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AddFile(props) {
  const [notFound, setNotFound] = useState(true);

  const [link, setLink] = useState();
  console.log("hello", props.key);

  return (
    <Card>
      <Card.Body>
        <Card.Title>Documents</Card.Title>

        {props.file ? (
          <>
            {props.file.map((data) => {
              return (
                <Link to={data.link} key={data.key}>
                  <button>
                    <img
                      src="https://play-lh.googleusercontent.com/emmbClh_hm0WpWZqJ0X59B8Pz1mKoB9HVLkYMktxhGE6_-30SdGoa-BmYW73RJ8MGZQ"
                      width="30"
                    />
                  </button>
                </Link>
              );
            })}
          </>
        ) : (
          "No document available"
        )}
      </Card.Body>
    </Card>
  );
}
