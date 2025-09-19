// Shared props
interface BaseMessageProps {
  isCurrentUser: boolean;
  text: string;
  timestamp: string;
}

// Contact message (no avatar)
export function ContactMessage({
  isCurrentUser,
  text,
  timestamp,
}: BaseMessageProps) {
  return (
    <div
      className={`relative inline-block py-1.5 px-3 pb-5 max-w-[65%] w-fit rounded-[var(--chat-message-radius)] mt-3 ${
        isCurrentUser ? "bg-[#212530]/90 ml-auto" : "bg-[#2c2e33]/90"
      }`}
    >
      <span className="text-sm">{text}</span>
      <span className="text-xs absolute right-2 bottom-1.5 text-gray-400">
        {timestamp}
      </span>
    </div>
  );
}

// Group message (may include avatar)
interface GroupMessageProps extends BaseMessageProps {
  avatarUrl?: string;
}

export function GroupMessage({
  isCurrentUser,
  text,
  timestamp,
  avatarUrl,
}: GroupMessageProps) {
  return (
    <div
      className={`flex items-start gap-x-2 mt-3 ${
        isCurrentUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar only if not current user */}
      {!isCurrentUser && (
        <div className="w-8 h-8 rounded-full bg-gray-800 flex-shrink-0 overflow-hidden">
          {avatarUrl && (
            <img
              src={avatarUrl}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}

      <div
        className={`relative inline-block py-1.5 px-3 pb-5 max-w-[65%] w-fit rounded-[var(--chat-message-radius)] ${
          isCurrentUser ? "bg-[#212530]/90" : "bg-[#2c2e33]/90"
        }`}
      >
        <span className="text-sm">{text}</span>
        <span className="text-xs absolute right-2 bottom-1.5 text-gray-400">
          {timestamp}
        </span>
      </div>
    </div>
  );
}
