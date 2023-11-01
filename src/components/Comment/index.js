import React from "react";
import { BiSolidUserCircle } from "react-icons/bi";

const Comment = (props) => {
  const { name, text } = props.data;

  return (
    <div className="flex align-center py-2 px-4 shadow-sm bg-gray-100 rounded-lg">
      <BiSolidUserCircle className="h-10 w-8" />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
