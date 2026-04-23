"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, LoaderCircle, MessageSquare, Send, Sparkles, X } from "lucide-react";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const starterQuestions = [
  "What kind of projects has Yenula built?",
  "Which technologies does Yenula use most?",
  "Tell me about Yenula's background.",
];

const initialMessages: ChatMessage[] = [
  {
    id: "assistant-welcome",
    role: "assistant",
    content:
      "Hi, I'm Yenula's AI assistant. Ask me about projects, skills, or experience.",
  },
];

export default function SmoothAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const viewportRef = useRef<HTMLDivElement>(null);
  const messageIdRef = useRef(0);

  function nextMessageId(prefix: ChatMessage["role"] | "error") {
    messageIdRef.current += 1;
    return `${prefix}-${messageIdRef.current}`;
  }

  useEffect(() => {
    if (!viewportRef.current) return;

    viewportRef.current.scrollTo({
      top: viewportRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  async function sendMessage(nextMessage?: string) {
    const content = (nextMessage ?? message).trim();
    if (!content || isSending) return;

    const userMessage: ChatMessage = {
      id: nextMessageId("user"),
      role: "user",
      content,
    };

    setMessages((current) => [...current, userMessage]);
    setMessage("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: content }),
      });

      const data = await response.json();

      setMessages((current) => [
        ...current,
        {
          id: nextMessageId("assistant"),
          role: "assistant",
          content:
            data.reply ??
            "I could not generate a response right now. Please try again.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: nextMessageId("error"),
          role: "assistant",
          content:
            "Something went wrong while reaching the assistant. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end justify-end">
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-[28px] border border-cyan-300/20 bg-neutral-950/95 text-white shadow-[0_24px_80px_rgba(12,18,28,0.55)] backdrop-blur-2xl"
          >
            <div className="relative overflow-hidden border-b border-white/10 px-5 py-4">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.24),_transparent_55%)]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-cyan-400/15 p-2 text-cyan-200">
                    <Bot size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">Smooth AI Chat</p>
                      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-emerald-200">
                        Live
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-gray-300">
                      Fast answers about Yenula, including work, skills, and background.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-gray-300 transition hover:bg-white/10 hover:text-white"
                  aria-label="Close chatbot"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            <div
              ref={viewportRef}
              className="max-h-[24rem] space-y-4 overflow-y-auto px-4 py-4"
            >
              {messages.map((entry) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`flex ${
                    entry.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                      entry.role === "user"
                        ? "bg-cyan-400 text-slate-950"
                        : "border border-white/10 bg-white/5 text-gray-100"
                    }`}
                  >
                    {entry.content}
                  </div>
                </motion.div>
              ))}

              {isSending && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                    <LoaderCircle size={16} className="animate-spin" />
                    Thinking...
                  </div>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 px-4 pb-4 pt-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {starterQuestions.map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => void sendMessage(question)}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:text-cyan-100"
                  >
                    {question}
                  </button>
                ))}
              </div>

              <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                <textarea
                  rows={1}
                  placeholder="Ask about projects, skills, or experience..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      void sendMessage();
                    }
                  }}
                  className="max-h-28 min-h-11 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-gray-500"
                />

                <button
                  type="button"
                  onClick={() => void sendMessage()}
                  disabled={!message.trim() || isSending}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-cyan-300/25 bg-neutral-950/90 px-4 py-3 text-white shadow-[0_16px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        aria-expanded={isOpen}
        aria-label="Toggle AI chatbot"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_65%)] opacity-80" />
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400 text-slate-950">
          {isOpen ? <X size={18} /> : <MessageSquare size={18} />}
        </div>
        <div className="relative hidden text-left sm:block">
          <p className="text-sm font-medium">Chat with AI</p>
          <p className="text-xs text-gray-300">Smooth, instant portfolio answers</p>
        </div>
        <Sparkles
          size={16}
          className="relative text-cyan-200 transition group-hover:rotate-12"
        />
      </motion.button>
    </div>
  );
}
