"use client";

import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PublicNavbar } from "@/components/public/PublicNavbar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <PublicNavbar />
      <main
        data-route-scroll-root
        className="flex-1 px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
