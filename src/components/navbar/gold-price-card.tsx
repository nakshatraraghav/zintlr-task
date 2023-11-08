import { Card, CardContent } from "@/components/ui/card";

import graph from "@/assets/gold-price.png";

import { TrendingUp } from "lucide-react";

export function GoldPriceCard() {
  return (
    <Card className="w-[280px]">
      <CardContent className="flex items-center space-x-2 mt-4">
        <p className="text-[#fc6b21] text-base font-semibold">Gold</p>
        <img src={graph} className="mt-2" alt="Gold Price Graph" width={60} />
        <div className="flex flex-col text-xs font-semibold">
          <div className="flex items-center space-x-2">
            <p>Buy: 7390.00</p>
            <TrendingUp size={18} className="text-green-600" />
          </div>
          <div className="flex items-center space-x-2">
            <p>Sell: 7090.00</p>
            <TrendingUp size={18} className="text-green-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
