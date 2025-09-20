import ChatHeader from "./chat-header";
import InputMessage from "./input-message";
import ListChatMessages from "./list-chat-messages";

export default function ChatLayout() {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto mt-16" style={{ paddingBottom: 'calc(var(--input-height) + 40px)' }}>
        <ListChatMessages />
      </div>

      <div id="input-container" className="fixed bottom-0 inset-x-0 p-3 bg-background border-t">
        <InputMessage />
      </div>
    </div>
  );
}