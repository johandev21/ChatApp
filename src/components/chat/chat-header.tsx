import { X } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="z-10 w-full flex justify-between items-center p-2 bg-[#E2E2FF]/5 backdrop-blur-3xl border-b border-b-inherit/5">
      <div className="flex items-center gap-1.5">
        {/* <UserIcon /> */}
        <div className="size-12 rounded-full bg-gray-800"></div>
        <div className="flex flex-col">
          <h2>John Doe</h2>
          {/* User Status */}
          {/* To create personalized component based on the status of the user, e.g: Active and Inactive */}
          <span className="text-xs text-[#F2F2F2]">Online</span>
        </div>
      </div>
      {/* <CloseChat /> */}
      <X className="cursor-pointer text-[#686A75]"/>
      <div className="absolute rounded-full -top-2.5 left-1 bg-[#36373D]/50 size-32 blur-2xl -z-10"></div>
      <div className="absolute rounded-full -top-8 -right-1.5 bg-[#1A1B20]/70 size-44 blur-2xl -z-10"></div>
    </div>
  );
}
