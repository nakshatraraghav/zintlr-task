import { Input } from "@/components/ui/input";

import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <div className="group relative transition-all duration-300">
      <Input
        placeholder="Search (Eg: Rewards)"
        className="group-hover:placeholder:text-[#c5c8ca] bg-[#f6fafc] text-lg placeholder:text-zinc-500 md:w-[340px] px-4 py-3 text-zinc-800 rounded-full focus:outline-none"
      />
      <SearchIcon className="absolute top-2 right-4 text-zinc-500 group-hover:text-zinc-800" />
    </div>
  );
}
