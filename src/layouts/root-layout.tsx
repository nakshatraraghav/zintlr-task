import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/sidebar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

export default function RootLayout() {
  return (
    <div className="h-screen w-screen font-inter flex">
      <Sidebar />
      <main className="flex flex-col w-full px-12 md:ml-[270px]">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}
