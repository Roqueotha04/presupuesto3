"use client";

import { AnimatePresence, m } from "framer-motion";
import { siteConfig } from "@/config/site.config";
import type { DmMessage, GlyphItem } from "@/config/site.types";
import { useLanguage } from "@/hooks/useLanguage";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { Glyph } from "@/components/ui/Glyph";
import { BrandAvatar } from "@/components/ui/brand/BrandAvatar";
import { SharedPost } from "@/components/ui/chat/SharedPost";
import { TypingDots } from "@/components/ui/chat/TypingDots";
import { CapabilityAnnotation } from "@/components/ui/chat/CapabilityAnnotation";

interface InstagramDmProps {
  status: string;
  conversation: DmMessage[];
  capabilities: GlyphItem[];
  revealedCount: number;
}

interface DmEntryProps {
  message: DmMessage;
  capabilities: GlyphItem[];
}

function DmEntry({ message, capabilities }: DmEntryProps) {
  const { t } = useLanguage();
  const capability = message.capability === undefined ? undefined : capabilities[message.capability];

  if (message.author === "system") {
    return (
      <p className="flex items-center gap-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-fg-muted">
        <span aria-hidden className="h-px flex-1 bg-line" />
        {capability && <Glyph name={capability.glyph} className="h-3 w-3 text-brand" />}
        {t(message.text)}
        <span aria-hidden className="h-px flex-1 bg-line" />
      </p>
    );
  }

  if (message.author === "buyer") {
    return (
      <div className="flex flex-col items-end gap-1.5">
        {message.attachment && <SharedPost image={message.attachment} />}
        <ChatBubble author="buyer" text={t(message.text)} />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start">
      <ChatBubble author="agent" text={t(message.text)} />
      {capability && message.annotation && <CapabilityAnnotation glyph={capability.glyph} text={t(message.annotation)} />}
    </div>
  );
}

export function InstagramDm({ status, conversation, capabilities, revealedCount }: InstagramDmProps) {
  const isComplete = revealedCount >= conversation.length;

  return (
    <div className="relative">
      <span aria-hidden className="absolute -right-3 -top-3 h-full w-full skew-x-[-4deg] bg-brand" />
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-[0_40px_80px_-40px_rgb(0_0_0/0.45)] ring-1 ring-card-line">
        <header className="flex items-center gap-3 border-b border-line px-5 py-4">
          <BrandAvatar />
          <div>
            <p className="text-sm font-bold text-fg">{siteConfig.client.handle}</p>
            <p className="flex items-center gap-1.5 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {status}
            </p>
          </div>
        </header>
        <ol className="flex min-h-[30rem] flex-col gap-3 p-4 md:p-6" aria-live="polite">
          {conversation.slice(0, revealedCount).map((message) => (
            <m.li
              key={message.text.es}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <DmEntry message={message} capabilities={capabilities} />
            </m.li>
          ))}
          <AnimatePresence>
            {!isComplete && (
              <m.li key="typing" exit={{ opacity: 0 }}>
                <TypingDots />
              </m.li>
            )}
          </AnimatePresence>
        </ol>
      </div>
    </div>
  );
}
