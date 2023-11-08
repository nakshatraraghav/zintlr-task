import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/sidebar/sidebar";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen font-inter flex">
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
