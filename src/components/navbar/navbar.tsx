import { GoldPriceCard } from "./gold-price-card";
import { ProfileDropdown } from "./profile-dropdown";
import { RightWidgets } from "./right-widgets";
import { SearchBar } from "./search-bar";

export function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between my-5">
      <SearchBar />
      <div className="hidden md:flex items-center space-x-4">
        <RightWidgets />
        <div className="mt-4">
          <GoldPriceCard />
        </div>
        <ProfileDropdown />
      </div>
    </nav>
  );
}
