import React from "react";

const Button = (props) => {
  const { name } = props;

  return (
    <button className="rounded-md px-5 py-2 m-2 bg-gray-200">{name}</button>
  );
};

export default Button;
