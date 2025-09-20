import { messages } from "@/lib/messages";
import { ContactMessage, GroupMessage } from "./chat-message";

export default function ListChatMessages() {
  return (
    <div className="flex flex-col px-4 py-2">
      {messages.map((msg) =>
        msg.type === "contact" ? (
          <ContactMessage key={msg.id} {...msg} />
        ) : (
          <GroupMessage key={msg.id} {...msg} />
        )
      )}
    </div>
  );
}
