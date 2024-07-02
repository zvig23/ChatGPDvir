import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Chat, ChatsAtom } from "../../state/ChatsAtom";
import { IoTrashOutline } from "react-icons/io5";


export interface ChatsManagementProps {}

export const ChatsManagement = () => {
  const [localChats, setLocalChats] = useState<Array<string>>([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState<number>(0);

  useEffect(() => {
    const storedChats = localStorage.getItem("previousChats");
  }, []);
  const createNewChat = () => {
    const chatTitle = prompt(
      "Please name this chat",
      `Chat ${Object.entries(localChats).length}`
    );
    if (chatTitle !== null) {
      setLocalChats((prevChats) => [...prevChats, chatTitle]);
      localStorage.setItem("previousChats", localChats.toString());
    }
  };
  return (
    <div>
      <div className="sidebar-header" onClick={createNewChat} role="button">
        <BiPlus size={20} />
        <button>New Chat</button>
      </div>
      <div className="sidebar-history">
        {localChats.length !== 0 && (
          <>
            <ul>
              {localChats?.map((chat: string, idx: number) => {
                const listItems = document.querySelectorAll("li");

                listItems.forEach((item) => {
                  if (item.scrollWidth > item.clientWidth) {
                    item.classList.add("li-overflow-shadow");
                  }
                });

                return (
                  <li key={idx} onClick={() => setSelectedChatIndex(idx)}>
                    {selectedChatIndex == idx ? (
                      <>
                        <b>{chat}</b>
                        <IoTrashOutline
                          style={{ float: "left" }}
                          onClick={() => {
                            const firstPart = localChats.slice(0, idx);
                            const secondPart = localChats.slice(idx, localChats.length-1);
                            setLocalChats([...firstPart, ...secondPart])
                          }}
                        />
                      </>
                    ) : (
                      chat
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
