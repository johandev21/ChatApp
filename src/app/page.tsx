"use client";

import ChatLayout from "@/components/chat/chat-layout";
import SidebarLayout from "@/components/sidebar/sidebar-layout";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div></div>;
  }

  return <div>
    <SidebarLayout />
    {/* <ChatLayout /> */}
  </div>;
}
