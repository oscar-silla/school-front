import React from "react";

type propsType = {
  className?: any;
  children: any;
};

const Box = (props: propsType) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Box;
