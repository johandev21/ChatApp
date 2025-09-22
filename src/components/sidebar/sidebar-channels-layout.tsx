import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CheckCircle, Pencil, Camera } from "lucide-react";

type ChannelItem = {
  id: string;
  name: string;
  avatarUrl: string;
  followers: string;
  isVerified: boolean;
};

const channelsToFollow: ChannelItem[] = [
  {
    id: "c1",
    name: "Fortnite ES",
    avatarUrl: "https://i.pravatar.cc/150?u=fortnite",
    followers: "1.5M followers",
    isVerified: true,
  },
  {
    id: "c2",
    name: "GERMAN",
    avatarUrl: "https://i.pravatar.cc/150?u=german",
    followers: "946K followers",
    isVerified: true,
  },
  {
    id: "c3",
    name: "WhatsApp",
    avatarUrl: "https://i.pravatar.cc/150?u=whatsapp",
    followers: "231M followers",
    isVerified: true,
  },
  {
    id: "c4",
    name: "FC Barcelona",
    avatarUrl: "https://i.pravatar.cc/150?u=fcbarcelona",
    followers: "123M followers",
    isVerified: true,
  },
];

export default function SidebarChannelsLayout() {
  return (
    <div className="px-4 py-4">
      <h2 className="text-lg font-semibold text-foreground mt-6">Channels</h2>
      <p className="text-sm text-muted-foreground mt-2">
        Stay updated on topics that matter to you. Find channels to follow below.
      </p>

      <h3 className="text-base font-semibold text-foreground mt-6 mb-4">Find channels to follow</h3>

      {/* List of Channels */}
      {channelsToFollow.map((channel) => (
        <div key={channel.id} className="flex items-center justify-between gap-4 py-3">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src={channel.avatarUrl} alt={`${channel.name}'s avatar`} />
              <AvatarFallback>{channel.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <p className="font-medium text-foreground">{channel.name}</p>
                {channel.isVerified && <CheckCircle className="h-4 w-4 text-blue-500" />}
              </div>
              <p className="text-sm text-muted-foreground">{channel.followers}</p>
            </div>
          </div>
          <Button variant="outline" className="text-primary hover:text-primary-foreground hover:bg-primary">
            Follow
          </Button>
        </div>
      ))}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-3 z-20">
        <Button size="icon" className="rounded-full bg-secondary hover:bg-secondary/80 shadow-lg">
          <Pencil className="h-5 w-5 text-foreground" />
        </Button>
        <Button size="icon" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg">
          <Camera className="h-6 w-6 text-primary-foreground" />
        </Button>
      </div>
    </div>
  );
}