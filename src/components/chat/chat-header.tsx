import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Chat } from "../sidebar/sidebar-chat-list-item";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface ChatHeaderProps {
  chat: Chat;
  onClose: () => void;
}

export default function ChatHeader({ chat, onClose }: ChatHeaderProps) {
  return (
    <div className="z-10 fixed top-0 inset-x-0 h-16 w-full flex justify-between items-center p-2 bg-[#E2E2FF]/5 backdrop-blur-3xl border-b border-b-inherit/5">
      <div className="flex items-center gap-1.5">
        <Avatar className="size-12 rounded-full">
            <AvatarImage src={chat.avatarUrl} alt={chat.name} />
            <AvatarFallback>{chat.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h2 className="font-semibold">{chat.name}</h2>
          <span className="text-xs text-foreground/80">Online</span>
        </div>
      </div>
      <Button size="icon" variant="ghost" className="rounded-full" onClick={onClose}>
        <X/>
      </Button>
      <div className="absolute rounded-full -top-2.5 left-1 bg-primary/20 size-32 blur-2xl -z-10"></div>
      <div className="absolute rounded-full -top-8 -right-1.5 bg-primary/30 size-44 blur-2xl -z-10"></div>
    </div>
  );
}