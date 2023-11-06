import { BiSolidUserCircle } from "react-icons/bi";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <BiSolidUserCircle className="h-8 w-8" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
