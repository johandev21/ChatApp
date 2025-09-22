import SidebarChatList from "./sidebar-chat-list";
import SidebarFooter from "./sidebar-footer";
import SidebarHeader from "./sidebar-header";

export default function SidebarLayout() {
  return (
    <div>
      <SidebarHeader />
      <SidebarChatList />
      <SidebarFooter />
    </div>
  )
}
