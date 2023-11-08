import { Bell, Wallet, Folder, CircleDollarSign } from "lucide-react";

export function RightWidgets() {
  return (
    <div className="flex items-center space-x-2">
      <CircleDollarSign />
      <Wallet />
      <Folder />
      <Bell />
    </div>
  );
}
