import { ContactMessage, GroupMessage } from "./chat-message";

export default function ListChatMessages() {
  const messages = [
    {
      id: 1,
      type: "contact" as const,
      isCurrentUser: false,
      text: "Hola, ¿cómo estás?",
      timestamp: "15:20",
    },
    {
      id: 2,
      type: "contact" as const,
      isCurrentUser: true,
      text: "Todo bien, terminando el diseño del proyecto 🚀",
      timestamp: "15:21",
    },
    {
      id: 3,
      type: "group" as const,
      isCurrentUser: false,
      text: "No olvides avanzar el backend después",
      timestamp: "15:22",
      avatarUrl: "/avatars/john.png",
    },
    {
      id: 4,
      type: "group" as const,
      isCurrentUser: true,
      text: "Sí, lo tengo en mente 😉",
      timestamp: "15:23",
    },
  ];

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
