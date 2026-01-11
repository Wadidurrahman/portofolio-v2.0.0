import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { AiFloatingButton } from "@/components/features/AiFloatingButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wadidur Rahman - Portfolio",
  description: "Fullstack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen overflow-hidden bg-slate-50`}>
        <aside className="hidden md:block w-72 shrink-0 h-full border-r border-slate-200 bg-white z-50">
          <Sidebar />
        </aside>
        
        <main className="flex-1 h-full overflow-y-auto relative p-6 scroll-smooth">
          <div className="max-w-7xl mx-auto">
             {children}
          </div>
          <AiFloatingButton />
        </main>
      </body>
    </html>
  );
}