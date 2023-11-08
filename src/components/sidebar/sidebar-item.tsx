import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { cn } from "@/lib/utils";

import { SidebarLinkItem } from "@/data/sidebar";

export function SidebarItem({ name, Icon, link }: SidebarLinkItem) {
  const { pathname } = useLocation();

  return (
    <Link to={link}>
      <div
        className={cn(
          "group hover:bg-blue-600 flex items-center space-x-2 p-4 transition-all duration-300 rounded-full",
          pathname === link && "bg-blue-500"
        )}
      >
        <Icon
          className={cn(
            "group-hover:text-white text-zinc-500",
            pathname === link && "text-white"
          )}
        />
        <p
          className={cn(
            "group-hover:text-white text-zinc-500",
            pathname === link && "text-white"
          )}
        >
          {name}
        </p>
      </div>
    </Link>
  );
}
