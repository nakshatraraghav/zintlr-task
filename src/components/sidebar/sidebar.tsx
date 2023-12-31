import { sidebarItemData } from "@/data/sidebar";
import { SidebarItem } from "./sidebar-item";

export function Sidebar() {
  return (
    <div className="py-6 px-3 hidden md:block h-screen min-w-[270px] bg-[#f6fafc] fixed top-o left-0 top-1">
      <div className="uppercase text-[#5d5fef] text-xl font-semibold py-6 px-4">
        Zintlr
      </div>
      <div className="h-full flex flex-col space-y-2">
        {sidebarItemData.map((item) => {
          return <SidebarItem key={item.name} {...item} />;
        })}
      </div>
    </div>
  );
}
