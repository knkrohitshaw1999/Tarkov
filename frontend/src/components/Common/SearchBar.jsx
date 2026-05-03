import React, { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = ({ onSearch, useNavigation = true }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setOpen] = useState(false);

  const handleSearchToggle = () => {
    setOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchTerm);
    }

    if (useNavigation) {
      window.location.href = `/collections/all?search=${searchTerm}`;
    }

    setOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-end transition-all duration-300 ${
        isOpen ? "w-full" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="flex items-center gap-2"
        >
          {/* Input + Icon */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pr-10 rounded-lg w-64 outline-none focus:ring-2 focus:ring-gray-400"
            />

            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <HiMagnifyingGlass className="h-5 w-5" />
            </button>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="text-gray-600 hover:text-black"
          >
            <HiMiniXMark className="h-5 w-5" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          <HiMagnifyingGlass className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;