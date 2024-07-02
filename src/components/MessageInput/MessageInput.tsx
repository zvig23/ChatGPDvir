import { useState } from "react";
import { BiSend } from "react-icons/bi";
import { responseMessage } from "../../state/ChatsAtom";

export interface MessageInputProps {
  context: Array<responseMessage>;
  updateMethod: React.Dispatch<React.SetStateAction<responseMessage[]>>;
}

export const MessageInput = ({ context, updateMethod }: MessageInputProps) => {
  const [text, setText] = useState<string>("");

  const talkToDvir = () => {
    const newMessage : responseMessage = {
      content: text,
      role: context.length % 2 == 0 ? "user" : "",
      title: "Dvir",
    }

    updateMethod([...context, newMessage]);
    if (text=="דביר"){
      const newMessage : responseMessage = {
        content: "אל תשכחו את כל מה שלימדתי אתכם",
        role: context.length % 2 == 0 ? "user" : "",
        title: "Dvir",
      }
      updateMethod([...context, newMessage]);

    }
  };

  return (
    <div>
      <div className="main-bottom">
        <div className="form-container">
          <input
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                talkToDvir();
                setText("");
              }
            }}
            type="text"
            dir="rtl"
            placeholder="שתיים שלוש שגר!"
            spellCheck="false"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button onClick={talkToDvir}>
            <BiSend size={20} />
          </button>
        </div>
        <p>Brought you by Team Prototype</p>
      </div>
    </div>
  );
};
1;
