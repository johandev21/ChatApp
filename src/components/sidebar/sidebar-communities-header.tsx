import { MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarCommunitiesHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-background p-4 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold text-foreground">Communities</h1>
      <Button variant="ghost" size="icon" className="hover:bg-accent">
        <MoreVertical className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
  );
}