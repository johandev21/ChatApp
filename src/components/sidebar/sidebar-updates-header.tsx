import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SidebarUpdatesHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-background p-4 flex justify-between items-center border-b">
      <h1 className="text-2xl font-bold text-foreground">Updates</h1>
      <Button variant="ghost" size="icon" className="hover:bg-accent">
        <Search className="h-5 w-5 text-muted-foreground" />
      </Button>
    </div>
  );
}