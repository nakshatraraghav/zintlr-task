import { ClassValue } from "clsx";
import { Ticket, type LucideIcon } from "lucide-react";

import { ShieldAlert, Contact } from "lucide-react";

interface CardData {
  Icon: LucideIcon;
  iconColor: string;
  count: number;
  body: string;
  action: string;
  className?: ClassValue;
}

export const cardData: CardData[] = [
  {
    Icon: Contact,
    iconColor: "text-[#b45600]",
    count: 276,
    body: "KYC approval pending",
    action: "View List",
    className: "bg-gradient-to-bl from-[#f0decd] to-[#f9ede2]",
  },
  {
    Icon: ShieldAlert,
    iconColor: "text-[#d84545]",
    count: 182,
    body: "high risk consumers",
    action: "View List",
    className: "bg-gradient-to-bl from-[#f9e6e6] to-[#f4ecef]",
  },
  {
    Icon: Ticket,
    iconColor: "text-[#4daeff]",
    count: 32,
    body: "tickets open",
    action: "View List",
    className: "bg-gradient-to-bl from-[#e6edf7] to-[#f2f7fe]",
  },
];
