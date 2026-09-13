"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppUrl } from "@/lib/config/site";

const CHAT_PROMPTS = [
  "Planning your next holiday? Chat with us.",
  "Need help choosing a destination? We’re here to help.",
  "Want to book a tour or fixed departure? Message us.",
  "Need visa, flight or travel assistance? Chat with us.",
];

export function FloatingWhatsApp() {
  const [promptIndex, setPromptIndex] = useState(0);
  const prompt = CHAT_PROMPTS[promptIndex];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPromptIndex((current) => (current + 1) % CHAT_PROMPTS.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex max-w-[calc(100vw-2.5rem)] flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <div
        key={promptIndex}
        className="relative max-w-[280px] rounded-2xl rounded-br-md border border-slate-200 bg-white px-4 py-3 text-sm font-semibold leading-5 text-[#092f42] shadow-[0_10px_30px_rgba(2,6,23,0.14)] animate-in fade-in slide-in-from-bottom-2 duration-300"
      >
        <span>{prompt}</span>
        <span className="absolute -bottom-2 right-5 h-4 w-4 rotate-45 border-b border-r border-slate-200 bg-white" aria-hidden="true" />
      </div>

      <a
        href={getWhatsAppUrl(prompt)}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_26px_rgba(37,211,102,0.38)] transition duration-300 hover:scale-105 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat with Green Sky Travels on WhatsApp"
      >
        <FaWhatsapp className="text-[30px]" aria-hidden="true" />
        <span className="absolute right-0 top-0 flex h-3 min-w-3 items-center justify-center rounded-full border-2 border-white bg-[#e53935] px-1 text-[10px] font-extrabold leading-none text-white shadow-md">
          {/* 1 */}
        </span>
        <span className="absolute inset-0 rounded-full border border-white/30" />
      </a>
    </div>
  );
}

