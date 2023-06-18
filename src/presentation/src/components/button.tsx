import React, { ReactElement } from "react";
import { Button } from "@mui/material";

type propsType = {
  variant: any;
  text: string;
  type: any;
};

const CustomButton = (props: propsType): ReactElement => {
  return (
    <Button type={props.type} className="w100" variant={props.variant}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
