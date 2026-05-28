import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
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
