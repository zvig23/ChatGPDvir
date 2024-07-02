import { useRef, useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";
import { responseMessage } from "../../state/ChatsAtom";
import { MessageInput } from "../MessageInput";

export const ChatContent = () => {
  const [chat, setChat] = useState<Array<responseMessage>>([]);
  const scrollToLastItem = useRef(null);

  return (
    <div className="main-header">
      <ul>
        {chat.map((chatMsg, idx) => {
          const isUser = chatMsg.role === "user";

          return (
            <li key={idx} ref={scrollToLastItem}>
              {isUser ? (
                <>
                  <BiSolidUserCircle size={28.8} />
                  <p>You</p>
                  <p>{chatMsg.content}</p>
                </>
              ) : (
                <>
                  <img src="images/BinaLogo.svg" alt="ChatGPT" />
                  <p>Dvir</p>
                  <p dir="rtl">{chatMsg.content}</p>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <MessageInput context={chat} updateMethod={setChat} />
    </div>
  );
};
