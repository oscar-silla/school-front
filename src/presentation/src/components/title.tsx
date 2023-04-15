import React from "react";

type propTypes = {
  title: string;
};

const Title = ({ title }: propTypes) => {
  return (
    <div className="title">
      <span data-testid="event-title">{title}</span>
      <hr />
    </div>
  );
};

export default Title;
