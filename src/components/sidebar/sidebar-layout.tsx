import { useState } from "react";
import SidebarChatLayout from "./sidebar-chat-layout";
import SidebarCommunitiesLayout from "./sidebar-communities-layout";
import SidebarFooter from "./sidebar-footer";
import SidebarUpdatesLayout from "./sidebar-updates-layout";

export type Tab = "Chats" | "Updates" | "Communities";

export default function SidebarLayout() {
  const [activeTab, setActiveTab] = useState<Tab>("Chats");

  return (
    <div className="h-screen overflow-auto bg-background text-foreground">
      {activeTab === "Chats" && <SidebarChatLayout />}
      {activeTab === "Updates" && <SidebarUpdatesLayout />}
      {activeTab === "Communities" && <SidebarCommunitiesLayout />}

      <SidebarFooter activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}