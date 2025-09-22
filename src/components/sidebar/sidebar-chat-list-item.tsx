import { Camera, Check, CheckCheck, Pin, Smile } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export type Chat = {
  id: string;
  name: string;
  avatarUrl: string;
  lastMessage: string;
  lastMessageType: 'text' | 'photo' | 'sticker';
  timestamp: string;
  isPinned?: boolean;
  readStatus?: 'sent' | 'delivered' | 'read';
  sender?: string;
};

const ReadStatus = ({ status }: { status: Chat['readStatus'] }) => {
  if (status === 'read') {
    return <CheckCheck size={18} className="text-blue-500" />;
  }
  if (status === 'delivered') {
    return <CheckCheck size={18} className="text-zinc-400" />;
  }
  if (status === 'sent') {
    return <Check size={18} className="text-zinc-400" />;
  }
  return null;
};

const MessageIcon = ({ type }: { type: Chat['lastMessageType'] }) => {
  if (type === 'photo') {
    return <Camera size={16} className="text-zinc-400" />;
  }
  if (type === 'sticker') {
    return <Smile size={16} className="text-zinc-400" />;
  }
  return null;
}

export default function SidebarChatListItem({
  name,
  avatarUrl,
  lastMessage,
  lastMessageType,
  timestamp,
  isPinned,
  readStatus,
  sender,
}: Chat) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 cursor-pointer rounded-lg hover:bg-primary/20 transition-colors duration-200">
      <Avatar className="h-12 w-12">
        <AvatarImage src={avatarUrl} alt={`${name}'s avatar`} />
        <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0 pb-3">
        <div className="flex justify-between items-center mb-1">
          <p className="text-base font-medium truncate">{name}</p>
          <p className="text-xs whitespace-nowrap">{timestamp}</p>
        </div>
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-1.5 text-sm min-w-0">
            <ReadStatus status={readStatus} />
            {sender && <span className="font-medium">{sender}:</span>}
            <MessageIcon type={lastMessageType} />
            <p className="truncate">{lastMessage}</p>
          </div>
          {isPinned && <Pin size={16} className="flex-shrink-0" />}
        </div>
      </div>
    </div>
  );
}