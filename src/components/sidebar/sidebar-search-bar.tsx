import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SidebarSearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 transform" />
      <Input
        type="text"
        placeholder="Search or start a new chat"
        className="h-9 w-full rounded-full pl-10 text-sm focus:outline-none"
      />
    </div>
  );
}
