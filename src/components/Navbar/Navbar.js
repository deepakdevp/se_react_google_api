import React from "react";
import { Link } from "react-router-dom";
import { Search } from "../../container/Search/Search";

export const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className="p-5 pb-3 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen ">
        <Link to="/">
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900">
            RSE
          </p>
        </Link>
        <button
          type="button"
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkMode ? "💡 Light" : "🌙 Dark"}
        </button>
      </div>
      <Search />
    </div>
  );
};
