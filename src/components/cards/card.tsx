import { LucideIcon } from "lucide-react";

import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface CardProps {
  Icon: LucideIcon;
  iconColor: string;
  count: number;
  body: string;
  action: string;
  className: ClassValue;
}

export function Card({
  body,
  count,
  action,
  Icon,
  className,
  iconColor,
}: CardProps) {
  return (
    <ShadcnCard className={cn(className, "w-full")}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-4">
          <Icon className={iconColor} />
          <div>{count}</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm font-semibold">{body}</CardContent>
      <CardFooter>
        <Button className="bg-[#313945] text-white">{action}</Button>
      </CardFooter>
    </ShadcnCard>
  );
}
