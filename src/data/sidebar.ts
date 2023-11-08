import { type LucideIcon } from "lucide-react";
import {
  Home,
  Cog,
  Landmark,
  Network,
  User2,
  ArrowLeftRight,
  GalleryVerticalEnd,
  HelpCircle,
  Beaker,
} from "lucide-react";

type Link =
  | "dashboard"
  | "bullion-operations"
  | "transactions"
  | "network"
  | "consumers"
  | "other-operations"
  | "manage-bank-accounts"
  | "faq"
  | "customize-dashboard";

export interface SidebarLinkItem {
  name: string;
  Icon: LucideIcon;
  link: Link;
}

export const sidebarItemData: SidebarLinkItem[] = [
  {
    name: "Dashboard",
    Icon: Home,
    link: "dashboard",
  },
  {
    name: "Bullion Operations",
    Icon: Beaker,
    link: "bullion-operations",
  },
  {
    name: "Transactions",
    Icon: ArrowLeftRight,
    link: "transactions",
  },
  {
    name: "Your Network",
    Icon: Network,
    link: "network",
  },
  {
    name: "Consumers",
    Icon: User2,
    link: "consumers",
  },
  {
    name: "Other Operations",
    Icon: GalleryVerticalEnd,
    link: "other-operations",
  },
  {
    name: "Manage Bank Accounts",
    Icon: Landmark,
    link: "manage-bank-accounts",
  },
  {
    name: "Faq",
    Icon: HelpCircle,
    link: "faq",
  },
  {
    name: "Customize Dashboard",
    Icon: Cog,
    link: "customize-dashboard",
  },
];
