import type { Metadata } from "next";
import { IntroSplash } from "@/components/brand/IntroSplash";
import { ChatWindow } from "@/components/ChatWindow";
import { SiteHeader } from "@/components/SiteHeader";
import { DraftKnowledgeChip } from "@/components/StatusChip";
import { usesDraftKnowledge } from "@/lib/server/knowledge-status";

export const metadata: Metadata = {
  title: "Chat",
};

export default async function ChatPage() {
  const drafts = await usesDraftKnowledge();

  return (
    <div className="flex h-dvh flex-col">
      <IntroSplash label="abrindo o chat" />
      <SiteHeader active="chat" status={drafts ? <DraftKnowledgeChip /> : null} />
      <ChatWindow />
    </div>
  );
}
