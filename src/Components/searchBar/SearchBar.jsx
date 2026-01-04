import { useCallback, useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { IoMdStar } from "react-icons/io";
import useSearch from "../../Hooks/useSearch";
import { useQueryClient } from "@tanstack/react-query";
const SearchItem = ({ item }) => (
  <li className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out bg-primary/10 hover:bg-primary/20 rounded-xl hover:scale-[1.02] cursor-pointer">
    <div className="flex justify-between w-full items-center gap-4">
      <span className="text-neutral">{item.foodName}</span>
      <span className="text-neutral flex items-center gap-2">
        {item.rating}
        <IoMdStar size={20} className="text-primary/50" />
      </span>
    </div>
  </li>
);
export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: items = [], setShowData } = useSearch(searchTerm);

  const searchData = items.data
    ? items.data.filter((item, index) => {
        return index < 5;
      })
    : [];
  const clearSearch = () => {
    setSearchTerm("");
  };
  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center font-sans w-full py-8">
        {}
        <div className="w-full max-w-2xl mx-auto p-4 space-y-6 bg-primary/20 text-accent-content backdrop-blur-3xl border border-base-300 rounded-2xl shadow-lg">
          {}
          <div className="relative p-px rounded-2xl ocean-animated-gradient shadow-lg shadow-primary/20  transition-shadow duration-300 hover:shadow-primary/30 focus-within:shadow-primary/40">
            <div className="flex items-center w-full px-4 py-2 bg-base-100/80 rounded-2xl">
              <SearchIcon className="w-5 h-5 text-neutral" />
              <input
                type="text"
                placeholder="Search the app.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-1 text-lg text-neutral  placeholder-neutral bg-transparent focus:outline-none flex-1 min-w-0"
              />
            </div>
          </div>

          {}
          {searchData?.length > 0 && (
            <div className="px-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-semibold tracking-wider text-neutral uppercase">
                  Recent search
                </h2>
                <button
                  onClick={clearSearch}
                  className="btn btn-sm btn-primary text-sm duration-200 rounded-md"
                >
                  Clear
                </button>
              </div>

              <ul className="space-y-2">
                {searchData?.map((item) => (
                  <SearchItem key={item._id} item={item} />
                ))}
                {searchData?.length === 0 && (
                  <p className="text-center text-neutral py-4">
                    No results found for &quot;{searchTerm}&quot;
                  </p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
