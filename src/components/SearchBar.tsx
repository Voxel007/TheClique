import React from "react";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps = {
  width?: string;
};

function SearchBar({ width = "w-60" }: SearchBarProps) {
  return (
    <main
      className={`flex h-5 ${width} items-center justify-between rounded-2xl bg-white px-3 pt-0.75 text-left font-medium text-gray-500`}
    >
      <h6 className="">Search Events, Friends, ...</h6>
      <SearchIcon sx={{ fontSize: 15, color: "#465475" }} className="mb-0.5" />
    </main>
  );
}

export default SearchBar;
