"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, X, Send, MessageSquare, Github, Linkedin } from "lucide-react";
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

  const [showSocials, setShowSocials] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Hanya muncul otomatis jika chat sedang tertutup dan tidak sedang di-hover
      if (!isOpen && !isHovered) {
        setShowSocials(true);
        setTimeout(() => {
          setShowSocials(false);
        }, 4000);
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [isOpen, isHovered]);

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
            className="fixed bottom-[170px] md:bottom-28 right-4 md:right-6 w-[calc(100vw-2rem)] md:w-80 max-w-sm bg-white rounded-2xl shadow-2xl border z-[9999] overflow-hidden"
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

      <div 
        className="fixed bottom-[100px] md:bottom-8 right-4 md:right-6 z-[9998] flex items-center justify-end gap-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {(showSocials || isHovered) && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center gap-3"
            >
              <a
                href="https://www.linkedin.com/in/wadidur-rahman/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Wadidurrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-slate-200 text-slate-800 hover:bg-slate-900 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={!isOpen && !isHovered && !showSocials ? { y: [0, -6, 0] } : { y: 0 }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-14 w-14 shrink-0 bg-blue-600 rounded-full shadow-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
        >
          {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
        </motion.button>
      </div>
    </>
  );
}