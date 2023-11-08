import { ClassValue } from "clsx";
import { Ticket, type LucideIcon } from "lucide-react";

import { ShieldAlert, Contact } from "lucide-react";

interface CardData {
  Icon: LucideIcon;
  count: number;
  body: string;
  action: string;
  className?: ClassValue;
}

export const cardData: CardData[] = [
  {
    Icon: Contact,
    count: 276,
    body: "KYC approval pending",
    action: "View List",
    className: "bg-gradient-to-bl from-orange-500 to-yellow-300",
  },
  {
    Icon: ShieldAlert,
    count: 182,
    body: "high risk consumers",
    action: "View List",
    className: "bg-gradient-to-bl from-red-200 via-red-300 to-yellow-200",
  },
  {
    Icon: Ticket,
    count: 32,
    body: "tickets open",
    action: "View List",
    className: "bg-gradient-to-bl from-sky-400 to-cyan-300",
  },
];
