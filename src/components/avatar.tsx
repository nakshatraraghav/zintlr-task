import {
  Avatar as UiAvatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Button } from "./ui/button";

import { ChevronDown } from "lucide-react";

export function Avatar() {
  return (
    <Button variant={"outline"} className="py-11 mt-4 flex space-x-4">
      <UiAvatar className="w-12 h-12">
        <AvatarImage src={""} alt="@shadcn" />
        <AvatarFallback className="text-sm">user</AvatarFallback>
      </UiAvatar>
      <ChevronDown />
    </Button>
  );
}
