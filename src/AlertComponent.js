import React from "react";
import { Alert } from "@material-ui/lab";

function AlertComponent(props) {
  const onClick = function () {
    if (props.link) return window.open(props.link);
    else return;
  };

  return (
    <Alert onClick={onClick} severity={props.alertTypes}>
      {props.title}
    </Alert>
  );
}

export default AlertComponent;
