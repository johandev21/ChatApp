"use client";

import { useState } from "react";
import SidebarChatLayout from "./sidebar-chat-layout";
import SidebarCommunitiesLayout from "./sidebar-communities-layout";
import SidebarFooter from "./sidebar-footer";
import SidebarUpdatesLayout from "./sidebar-updates-layout";
import { Chat } from "./sidebar-chat-list-item";

export type Tab = "Chats" | "Updates" | "Communities";

interface SidebarLayoutProps {
  onSelectChat: (chat: Chat) => void;
}

export default function SidebarLayout({ onSelectChat }: SidebarLayoutProps) {
  const [activeTab, setActiveTab] = useState<Tab>("Chats");

  return (
    <div className="h-screen overflow-auto bg-background text-foreground">
      {activeTab === "Chats" && (
        <SidebarChatLayout onSelectChat={onSelectChat} />
      )}
      {activeTab === "Updates" && <SidebarUpdatesLayout />}
      {activeTab === "Communities" && <SidebarCommunitiesLayout />}

      <SidebarFooter activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
