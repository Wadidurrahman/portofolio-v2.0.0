"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function TypingIndicator() {
  return (
    <div className="bg-white border rounded-lg px-3 py-2 w-fit shadow-sm self-start">
      <div className="flex gap-1">
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export function AiFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data: { message?: string } = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message || "AI tidak merespons.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Terjadi kesalahan saat menghubungi AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border z-50 overflow-hidden"
          >
            <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-semibold text-sm">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div
              ref={scrollRef}
              className="p-4 h-64 bg-slate-50 overflow-y-auto flex flex-col gap-3"
            >
              {messages.map((m: Message, i: number) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg text-sm max-w-[85%] ${
                    m.role === "user"
                      ? "bg-blue-600 text-white self-end"
                      : "bg-white text-slate-700 self-start border"
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {loading && <TypingIndicator />}
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-3 border-t bg-white flex gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tanya tentang saya..."
                className="flex-1 text-sm bg-slate-50 border rounded-full px-4 py-2 outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded-full"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        animate={!isOpen ? { y: [0, -10, 0] } : { y: 0 }}
        transition={!isOpen ? { duration: 2, repeat: Infinity } : {}}
        className="fixed bottom-6 right-6 h-14 w-14 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white z-50"
      >
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </motion.button>
    </>
  );
}
