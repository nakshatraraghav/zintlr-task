import { GoldPriceCard } from "./gold-price-card";
import { RightWidgets } from "./right-widgets";
import { SearchBar } from "./search-bar";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between my-5 border-[1px]">
      <SearchBar />
      <RightWidgets />
      <div className="mt-4">
        <GoldPriceCard />
      </div>
    </nav>
  );
}
