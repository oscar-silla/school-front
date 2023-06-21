import React from "react";
import AlertComponent, { AlertColor } from "@mui/material/Alert";

type propsType = {
  type: AlertColor | undefined;
  text: string;
  className: string | undefined;
};

const Alert = (props: propsType): JSX.Element => {
  return (
    <AlertComponent className={props.className} severity={props.type}>
      {props.text}
    </AlertComponent>
  );
};

export default Alert;
