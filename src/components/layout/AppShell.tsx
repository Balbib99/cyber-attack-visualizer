"use client";

import { usePathname } from "next/navigation";
import { Topbar } from "@/components/layout/Topbar";
import { Sidebar } from "@/components/layout/Sidebar";
import { PublicNavbar } from "@/components/public/PublicNavbar";

function isPublicExperience(pathname: string) {
  if (pathname === "/") return true;
  if (pathname === "/retos") return true;

  return [
    "/rutas",
    "/simulaciones",
    "/seguridad-diaria",
    "/escenarios",
    "/amenazas",
  ].some((prefix) => pathname.startsWith(prefix));
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const publicExperience = isPublicExperience(pathname);

  if (publicExperience) {
    return (
      <div className="min-h-screen">
        <PublicNavbar />
        <main className="px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Sidebar />
      <Topbar />
      <main className="px-4 py-6 sm:px-6 lg:ml-72 lg:px-8">
        <div className="mx-auto w-full max-w-[90rem]">{children}</div>
      </main>
    </div>
  );
}
