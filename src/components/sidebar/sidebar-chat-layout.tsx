import SidebarChatListItem, { Chat } from "./sidebar-chat-list-item";
import SidebarHeader from "./sidebar-header";

const chatData: Chat[] = [
  {
    id: "1",
    name: "Myself (You)",
    avatarUrl: "https://i.pravatar.cc/150?u=myself",
    lastMessage: "Photo",
    lastMessageType: "photo",
    timestamp: "Yesterday",
    isPinned: true,
    readStatus: "read",
  },
  {
    id: "2",
    name: "Plato",
    avatarUrl: "https://i.pravatar.cc/150?u=plato",
    lastMessage: "Let no one ignorant of geometry enter.",
    lastMessageType: "text",
    timestamp: "4:05 PM",
    readStatus: "read",
  },
  {
    id: "3",
    name: "Aristotle",
    avatarUrl: "https://i.pravatar.cc/150?u=aristotle",
    lastMessage: "Happiness depends upon ourselves.",
    lastMessageType: "text",
    timestamp: "Thursday",
    readStatus: "read",
  },
  {
    id: "4",
    name: "Socrates",
    avatarUrl: "https://i.pravatar.cc/150?u=socrates",
    lastMessage: "The unexamined life is not worth living.",
    lastMessageType: "text",
    timestamp: "Wednesday",
  },
  {
    id: "5",
    name: "Stoics",
    avatarUrl: "https://i.pravatar.cc/150?u=stoics",
    lastMessage: "Marcus: Accept the things to which fate binds you.",
    lastMessageType: "text",
    timestamp: "Tuesday",
  },
  {
    id: "6",
    name: "Existentialists",
    avatarUrl: "https://i.pravatar.cc/150?u=existentialists",
    lastMessage: "Sartre: Existence precedes essence.",
    lastMessageType: "text",
    timestamp: "Monday",
    readStatus: "read",
  },
  {
    id: "7",
    name: "Nietzsche",
    avatarUrl: "https://i.pravatar.cc/150?u=nietzsche",
    lastMessage: "He who has a why to live can bear almost any how.",
    lastMessageType: "text",
    timestamp: "Monday",
    readStatus: "read",
  },
  {
    id: "8",
    name: "The Enlightenment",
    avatarUrl: "https://i.pravatar.cc/150?u=enlightenment",
    lastMessage: "Kant: Sapere aude! Dare to know.",
    lastMessageType: "text",
    timestamp: "Tuesday",
  },
  {
    id: "9",
    name: "Simone de Beauvoir",
    avatarUrl: "https://i.pravatar.cc/150?u=beauvoir",
    lastMessage: "One is not born, but rather becomes, a woman.",
    lastMessageType: "text",
    timestamp: "Monday",
    readStatus: "read",
  },
  {
    id: "10",
    name: "Confucius",
    avatarUrl: "https://i.pravatar.cc/150?u=confucius",
    lastMessage: "It does not matter how slowly you go as long as you do not stop.",
    lastMessageType: "text",
    timestamp: "Monday",
    readStatus: "read",
  },
];

interface SidebarChatLayoutProps {
  onSelectChat: (chat: Chat) => void;
}

export default function SidebarChatLayout({ onSelectChat }: SidebarChatLayoutProps) {
  return (
    <>
      <SidebarHeader />
      <div className="flex flex-col mt-[166px] mb-[90px] px-1">
        {chatData.map((chat) => (
          <div key={chat.id} onClick={() => onSelectChat(chat)}>
            <SidebarChatListItem {...chat} />
          </div>
        ))}
      </div>
    </>
  );
}