import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaUpload, FaSearch, FaCog } from "react-icons/fa";

const Header: FunctionComponent = () => {
  return (
    <section className="flex items-center justify-between gap-x-6 p-4 text-white ">
      <div className="flex w-3/5 items-center justify-between">
        <span className="flex-grow text-2xl font-bold text-white">
          Apple Watch Dashboard
        </span>
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 flex items-center px-3">
              <FaSearch className="h-6 w-6 stroke-current text-white" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="rounded border-4 bg-gray-900 border-aquamarine-700 py-3 pr-4 pl-10 text-sm text-white focus:text-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="flex w-2/5 items-center justify-between">
        <div className="flex items-center gap-x-2.5"></div>
        <div className="flex">
          <Link
            to={"/user"}
            className="relative mr-4 flex h-11 w-11 items-center justify-center rounded-full bg-aquamarine-700 text-white hover:text-white"
          >
            <FaUser className="h-7 w-7 stroke-current" />
          </Link>

          <Link
            to={"/upload"}
            className="relative mr-4 flex h-11 w-11 items-center justify-center rounded-full bg-aquamarine-700 text-white hover:text-white"
          >
            <FaUpload className="h-7 w-7 stroke-current" />
          </Link>

          <Link
            to={"/settings"}
            className="relative mr-4 flex h-11 w-11 items-center justify-center rounded-full bg-aquamarine-700 text-white hover:text-white"
          >
            <FaCog className="h-7 w-7 stroke-current" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { Header };
