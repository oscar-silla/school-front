import React, { ReactElement } from "react";
import { Button } from "@mui/material";

type propsType = {
  variant: any;
  text: string;
};

const CustomButton = (props: propsType): ReactElement => {
  return (
    <Button className="w100" variant={props.variant}>
      {props.text}
    </Button>
  );
};

export default CustomButton;
