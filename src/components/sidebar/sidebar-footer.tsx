import { MessageSquareText, Users, Target } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the navigation items
const navItems = [
  {
    name: "Chats",
    icon: MessageSquareText,
    isActive: true,
  },
  {
    name: "Updates",
    icon: Target,
    isActive: false,
  },
  {
    name: "Communities",
    icon: Users,
    isActive: false,
  },
];

export default function SidebarFooter() {
  return (
    <footer className="fixed z-10 bottom-0 left-0 right-0 flex justify-around items-center p-2 bg-background border-t border-border">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            className={cn(
              "flex flex-col items-center justify-center gap-1 h-16 w-20 rounded-lg transition-colors duration-200",
              item.isActive
                ? "bg-primary/20 text-primary"
                : "text-muted-foreground hover:bg-primary/10"
            )}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs font-medium">{item.name}</span>
          </button>
        );
      })}
    </footer>
  );
}