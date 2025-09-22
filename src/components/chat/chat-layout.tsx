import ChatHeader from "./chat-header";
import InputMessage from "./chat-input-message";
import ListChatMessages from "./list-chat-messages";
import { Chat } from "../sidebar/sidebar-chat-list-item";

interface ChatLayoutProps {
  chat: Chat;
  onClose: () => void;
}

export default function ChatLayout({ chat, onClose }: ChatLayoutProps) {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader chat={chat} onClose={onClose} />

      <div className="flex-1 overflow-y-auto mt-16" style={{ paddingBottom: 'calc(var(--input-height) + 40px)' }}>
        <ListChatMessages />
      </div>

      <div id="input-container" className="fixed bottom-0 inset-x-0 p-3 bg-background border-t">
        <InputMessage />
      </div>
    </div>
  );
}