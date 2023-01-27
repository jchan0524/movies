import { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Editlog from "../Components/EditLog";
import { Link } from "react-router-dom";
import EditLogin from "../Components/EditLogin";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <>
      <EditLogin show={show} toggleShow={toggleShow} />
      {/* <EditLog show={show} toggleShow={toggleShow} /> */}
    </>
  );
}
