import React from "react";

type propTypes = {
  title: string;
};

const Title = ({ title }: propTypes) => {
  return (
    <div className="title">
      <span>{title}</span>
      <hr />
    </div>
  );
};

export default Title;
