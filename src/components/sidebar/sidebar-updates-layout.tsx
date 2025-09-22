import SidebarChannelsLayout from "./sidebar-channels-layout";
import SidebarStatusLayout from "./sidebar-status-layout";
import SidebarUpdatesHeader from "./sidebar-updates-header";

export default function SidebarUpdatesLayout() {
  return (
    <div className="pb-24 pt-16">
      <SidebarUpdatesHeader />
      <SidebarStatusLayout />
      <SidebarChannelsLayout />
    </div>
  );
}