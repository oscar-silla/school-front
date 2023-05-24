import React from "react";

type propsType = {
  text: string;
};

const Subtitle = (props: propsType) => {
  return <p className="subtitle">{props.text}</p>;
};

export default Subtitle;
