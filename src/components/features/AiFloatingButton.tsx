"use client";

import { useState, useRef, useEffect } from "react";
import { Send, MessageSquare, Github, Linkedin, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Message = {
  role: "user" | "assistant";
  content: string;
};

function TypingIndicator() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-sm px-4 py-3 w-fit shadow-sm self-start">
      <div className="flex gap-1.5 items-center h-4">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export function AiFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Halo! Saya asisten AI Wadidur Rahman. Ada yang ingin Anda ketahui tentang pengalaman atau keahlian Wadidur?",
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, loading, isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data: { message?: string } = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.message || "Maaf, saya sedang tidak bisa merespons saat ini." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Terjadi kesalahan sistem. Silakan coba lagi nanti." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-[100px] md:bottom-8 right-4 md:right-8 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="mb-4 w-[calc(100vw-2rem)] md:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header Modern (Integrated Hub) */}
            <div className="bg-slate-900 p-4 md:p-5 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start relative z-10">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full border-2 border-slate-700 overflow-hidden shrink-0">
                    <Image src="/profil.png" alt="Wadidur Rahman" fill className="object-cover object-top" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">AI Assistant</h3>
                    <p className="text-slate-400 text-xs">by Wadidur Rahman</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Social Links di dalam Header Chat */}
              <div className="flex items-center gap-2 relative z-10 pt-2 border-t border-slate-700/50">
                <span className="text-xs text-slate-400 font-medium mr-2">Connect:</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="h-[320px] p-4 bg-slate-50/50 overflow-y-auto flex flex-col gap-4">
              {messages.map((m: Message, i: number) => (
                <div
                  key={i}
                  className={`flex gap-2 max-w-[85%] ${m.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}
                >
                  {m.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                      <Bot size={14} className="text-blue-600" />
                    </div>
                  )}
                  <div
                    className={`p-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-2xl rounded-tr-sm shadow-sm"
                        : "bg-white text-slate-700 border border-slate-100 rounded-2xl rounded-tl-sm shadow-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && <TypingIndicator />}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-3 md:p-4 bg-white border-t border-slate-100 flex gap-2 items-end">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }
                }}
                placeholder="Ketik pesan..."
                className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none max-h-32 min-h-[44px]"
                rows={1}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                className="h-[44px] w-[44px] shrink-0 bg-blue-600 disabled:bg-blue-400 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm"
              >
                <Send size={18} className="ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button Tunggal (Minimalis & Elegan) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-14 w-14 bg-slate-900 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center hover:bg-blue-600 transition-colors duration-300 relative group"
          >
            <MessageSquare size={24} />
            {/* Ping Indicator (Opsional: penanda ada pesan awal AI) */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}