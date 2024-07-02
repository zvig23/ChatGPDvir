import { atom } from "jotai";
export type responseMessage = {
  title: string;
  role: string;
  content: string;
};
export type Chat = {
  title: string;
  messages: Array<responseMessage>;
};
export const ChatsAtom = atom<Array<Chat>>([]);
export const SelectedChatIndexAtom = atom<number>(0);
