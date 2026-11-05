import type { DmMessage } from "@/config/site.types";

type BubbleAuthor = Exclude<DmMessage["author"], "system">;

interface ChatBubbleProps {
  author: BubbleAuthor;
  text: string;
}

const authorClasses: Record<BubbleAuthor, string> = {
  buyer: "rounded-br-md bg-[#ebeae5] text-graphite",
  agent: "rounded-bl-md bg-graphite text-bone",
};

export function ChatBubble({ author, text }: ChatBubbleProps) {
  return (
    <p className={`w-fit max-w-[85%] rounded-2xl px-3.5 py-2 text-[0.88rem] font-medium leading-snug ${authorClasses[author]}`}>
      {text}
    </p>
  );
}
