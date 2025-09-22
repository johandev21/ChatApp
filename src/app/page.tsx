"use client";

import { useState } from "react";
import ChatLayout from "@/components/chat/chat-layout";
import SidebarLayout from "@/components/sidebar/sidebar-layout";
import { Chat } from "@/components/sidebar/sidebar-chat-list-item";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();
  
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Not signed in</div>;
  }

  const handleSelectChat = (chat: Chat) => {
    setSelectedChat(chat);
  };

  const handleCloseChat = () => {
    setSelectedChat(null);
  };

  return (
    <div>
      {selectedChat ? (
        <ChatLayout chat={selectedChat} onClose={handleCloseChat} />
      ) : (
        <SidebarLayout onSelectChat={handleSelectChat} />
      )}
    </div>
  );
}