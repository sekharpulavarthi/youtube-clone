import React from "react";
import Button from "../Button";

const list = [
  "All",
  "Live",
  "Sports",
  "Gaming",
  "Cricket",
  "Music",
  "Marvel",
  "Movies",
  "Comedy",
  "Action",
  "Software",
  "ReactJs",
  "Redux",
];

const ButtonList = () => {
  return (
    <div className="flex flex-row ml-4 dark:bg-slate-800 dark:text-slate-300">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
