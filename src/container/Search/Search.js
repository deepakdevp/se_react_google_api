import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

import { useResultContext } from "../../context/ResultsContext";
import { Links } from "../../components/Links/Link";

export const Search = () => {
  const { setSearchText } = useResultContext();
  const [value, setValue] = useState("");
  const [debouncedValue] = useDebounce(value, 1000);

  useEffect(() => {
    if (debouncedValue) setSearchText(debouncedValue);
  }, [debouncedValue]);

  return (
    <div className="relative sm: md:ml-72 sm:-mt-10 mt-3">
      <input
        value={value}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black hover:shadow-lg"
        placeholder="🔎 Search "
        onChange={(e) => setValue(e.target.value)}
      />
      {value !== "" && (
        <button
          type="button"
          className="absolute top-1.5 right-4 text-2xl text-gray-500 "
          onClick={() => setValue("")}
        >
          x
        </button>
      )}
      <Links />
    </div>
  );
};
