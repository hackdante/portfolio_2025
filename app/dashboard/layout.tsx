import { LeftSidebar } from "@/components/composite";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-screen h-screen bg-slate-100 antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <LeftSidebar />
      <main className="flex-1 overflow-y-auto p-4 text-slate-900 ml-64">
        {children}
      </main>
    </div>
  );
}
