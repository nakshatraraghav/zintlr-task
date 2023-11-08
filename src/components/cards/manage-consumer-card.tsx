import { ChevronRight, User } from "lucide-react";

import {
  Card as ShadcnCard,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

export function ManageConsumersCard() {
  return (
    <ShadcnCard className="bg-[#f6fbfe] min-w-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center space-x-1 text-base text-[#65cefc]">
          <div>Consumer</div>
          <ChevronRight />
          <div>Manage Consumers</div>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm font-semibold">Actions</CardContent>
      <CardFooter>
        <Button className="bg-[#313945] text-white">
          <div className="flex items-center space-x-4">
            <User />
            <div>Add Consumer</div>
          </div>
        </Button>
      </CardFooter>
    </ShadcnCard>
  );
}
