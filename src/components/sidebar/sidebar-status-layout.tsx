import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, PlusCircle } from "lucide-react";

type StatusItem = {
  id: string;
  name: string;
  avatarUrl: string;
  timestamp: string;
};

const viewedUpdates: StatusItem[] = [
  {
    id: "s1",
    name: "Daniela",
    avatarUrl: "https://i.pravatar.cc/150?u=daniela",
    timestamp: "1:01 PM",
  },
];

export default function SidebarStatusLayout() {
  return (
    <div className="px-4 pt-4">
      <h2 className="text-lg font-semibold text-foreground mb-4">Status</h2>

      {/* Add Status */}
      <div className="flex items-center gap-4 py-3">
        <div className="relative">
          <Avatar className="h-12 w-12 border-2 border-border">
            <AvatarImage src="https://i.pravatar.cc/150?u=addstatus" alt="Add status avatar" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
          <div className="absolute bottom-0 right-0 bg-primary rounded-full p-[2px] border-2 border-background">
            <PlusCircle className="h-4 w-4 text-primary-foreground" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-foreground">Add status</p>
          <p className="text-sm text-muted-foreground">Disappears after 24 hours</p>
        </div>
      </div>

      {/* Viewed Updates */}
      <div className="flex justify-between items-center py-4">
        <p className="text-sm font-medium text-muted-foreground">Viewed updates</p>
        <ChevronUp className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* List of Viewed Updates */}
      {viewedUpdates.map((status) => (
        <div key={status.id} className="flex items-center gap-4 py-2">
          <Avatar className="h-12 w-12 border-2 border-border">
            <AvatarImage src={status.avatarUrl} alt={`${status.name}'s status`} />
            <AvatarFallback>{status.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="font-medium text-foreground">{status.name}</p>
            <p className="text-sm text-muted-foreground">{status.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  );
}