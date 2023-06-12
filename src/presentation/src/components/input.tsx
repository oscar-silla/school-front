import React, { ReactElement } from "react";
import { TextField } from "@mui/material";

type propsType = {
  type: string;
  label: string;
  name?: string;
};

const Input = (props: propsType): ReactElement => {
  return (
    <TextField
      id="outlined-basic"
      name={props.name}
      label={props.label}
      type={props.type}
      variant="outlined"
    />
  );
};

export default Input;
