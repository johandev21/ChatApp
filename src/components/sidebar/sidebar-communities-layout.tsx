import { Button } from "@/components/ui/button";
import { Users, MessageSquarePlus } from "lucide-react";
import SidebarCommunitiesHeader from "./sidebar-communities-header";

export default function SidebarCommunitiesLayout() {
  return (
    <div className="h-full pt-16 pb-24">
      <SidebarCommunitiesHeader />

      {/* Main content area */}
      <div className="flex flex-col items-center justify-center h-full text-center px-8">
        {/* Illustration Placeholder */}
        <div className="bg-muted p-8 rounded-2xl">
          <Users className="h-24 w-24 text-muted-foreground" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-foreground mt-8">
          Stay connected with a community
        </h2>

        {/* Description */}
        <p className="text-muted-foreground mt-4 max-w-sm">
          Communities bring members together in topic-based groups, and make it
          easy to get admin announcements. Any community you're added to will
          appear here.
        </p>

        {/* Call to Action Button */}
        <Button className="rounded-full px-8 py-6 text-base font-semibold mt-8 bg-primary hover:bg-primary/90">
          Start your community
        </Button>
      </div>
    </div>
  );
}
