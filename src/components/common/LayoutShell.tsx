"use client";

import { ReactNode } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";
import MobileSidebar from "@/components/common/MobileSidebar";
import Footer from "@/components/common/Footer";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile(1023);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {!isMobile && <Sidebar />}

      <main
        className={`flex-1 flex flex-col h-screen ${
          isMobile ? "ml-0" : "ml-[60px]"
        }`}
      >
        <Navbar />
        <div className="flex-1 mt-[60px] overflow-y-auto">
          {children}
          <Footer />
        </div>
        {isMobile && <MobileSidebar />}
      </main>
    </div>
  );
}
