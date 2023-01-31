import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import React from "react";

export default function AddProgressBar(props) {
  const [progress, setProgress] = useState({ 0: false, 1: false, 2: false });
  const [number, setNumber] = useState();

  function updateProgress(data) {
    const tempProgress = progress;

    if (data < 40) {
      tempProgress[0] = true;
      tempProgress[1] = false;
      tempProgress[2] = false;
      setProgress(tempProgress);
    } else if (data < 60) {
      tempProgress[1] = true;
      tempProgress[2] = false;
      tempProgress[0] = false;
      setProgress(tempProgress);
    } else {
      tempProgress[2] = true;
      tempProgress[1] = false;
      tempProgress[0] = false;
      setProgress(tempProgress);
    }
  }

  useEffect(() => {
    if (props.props === undefined) {
      return;
    }

    setNumber(props.props[0].num);
    updateProgress(props.props[0].num);
  },[props.props, updateProgress]);

  return (
    <ProgressBar>
      {progress[0] ? (
        <ProgressBar variant="danger" now={number} key={3} />
      ) : progress[1] ? (
        <ProgressBar variant="warning" now={number} key={2} />
      ) : (
        <ProgressBar variant="success" now={number} key={1} />
      )}
    </ProgressBar>
  );
}
