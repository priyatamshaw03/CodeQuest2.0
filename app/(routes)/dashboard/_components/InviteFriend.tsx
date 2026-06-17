"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Copy, MessageCircle } from "lucide-react";

function InviteFriend() {
  const [inviteLink, setInviteLink] = useState("");

  useEffect(() => {
    setInviteLink(`${window.location.origin}/sign-up`);
  }, []);

  const inviteMessage = `🚀 Join me on CodeQuest and start your coding journey!

🎯 Practice interactive quizzes
📚 Follow structured roadmaps
🎥 Learn through video courses
👨‍💻 Build real-world projects

Start learning today:
${inviteLink}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(inviteLink);
      toast.success("Invite link copied!");
    } catch (error) {
      toast.error("Failed to copy link");
    }
  };

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(inviteMessage)}`,
      "_blank"
    );
  };

  return (
    <div className="flex flex-col items-center mt-8 p-5 border rounded-xl bg-zinc-900 w-full">
      <Image
        src="/mail.png"
        alt="Invite Friend"
        width={80}
        height={80}
      />

      <h2 className="text-3xl font-game mt-3">
        Invite Your Friends 🎉
      </h2>

      <p className="font-game text-center text-gray-400 mt-2 max-w-xl">
        Learning is better together. Share CodeQuest with your friends and help
        them discover quizzes, roadmaps, courses, and exciting community
        projects.
      </p>

      <div className="w-full mt-5 bg-black border rounded-lg p-3 break-all text-sm text-gray-300">
        {inviteLink}
      </div>

      <div className="flex gap-3 mt-5 w-full">
        <Button
          variant="pixel"
          className="flex-1 font-game cursor-pointer"
          onClick={copyLink}
        >
          <Copy className="w-4 h-4 mr-2" />
          Copy Link
        </Button>

        <Button
          variant="pixel"
          className="flex-1 font-game cursor-pointer"
          onClick={shareWhatsApp}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          WhatsApp
        </Button>
      </div>
    </div>
  );
}

export default InviteFriend;