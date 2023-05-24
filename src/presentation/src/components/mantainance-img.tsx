import React from "react";
import construction from "../assets/img/construction.svg";

const MantainanceImg = (props: propsType) => {
  return (
    <img alt="In construction" className={props.className} src={construction} />
  );
};

type propsType = {
  className: any;
};

export default MantainanceImg;
