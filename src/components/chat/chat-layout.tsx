import ChatHeader from "./chat-header";
import InputMessage from "./input-message";
import ListChatMessages from "./list-chat-messages";

export default function ChatLayout() {
  return (
    <>
      <ChatHeader />
      <ListChatMessages />
      <InputMessage />
    </>
  );
}
