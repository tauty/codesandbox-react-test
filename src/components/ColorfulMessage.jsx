import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const style = {
    color,
    fontSize: "18px"
  };
  return <p style={style}>{children}</p>;
};
