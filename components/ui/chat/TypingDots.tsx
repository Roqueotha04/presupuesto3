export function TypingDots() {
  return (
    <div aria-hidden className="flex w-fit gap-1 rounded-2xl rounded-bl-md bg-graphite px-4 py-3">
      {[0, 0.15, 0.3].map((delay) => (
        <span
          key={delay}
          style={{ animationDelay: `${delay}s` }}
          className="typing-dot h-1.5 w-1.5 rounded-full bg-bone/70"
        />
      ))}
    </div>
  );
}
