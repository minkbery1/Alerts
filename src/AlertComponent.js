import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";

function AlertComponent(props) {
  const onClick = function () {
    if (props.link) return window.open(props.link);
    else return;
  };

  return (
    <Alert onClick={onClick} severity={props.alertType}>
      {props.alertTitle && <AlertTitle>{props.alertTitle}</AlertTitle>}
      {props.text}
    </Alert>
  );
}

export default AlertComponent;
