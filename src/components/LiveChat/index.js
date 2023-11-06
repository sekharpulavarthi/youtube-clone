import React, { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/stores/slices/chatSclice";
import {
  generateRandomName,
  generateRandomMessage,
} from "../../utils/helper.js";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispath = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispath(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(12),
        })
      );
    }, 1500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="w-full h-[550px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-hidden overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          dispath(
            addMessage({
              name: "Sekhar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
          className="px-2 w-96"
          value={liveMessage}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
