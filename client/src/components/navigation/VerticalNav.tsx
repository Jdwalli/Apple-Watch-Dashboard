import React, { useState, useEffect, FunctionComponent } from "react";
import { SidebarData } from "../../helpers/SidebarData";
import { Link, useLocation } from "react-router-dom";
import {
  FaFireAlt
} from "react-icons/fa";

const VerticalNav: FunctionComponent = () => {
  const [currentPath, setCurrentPath] = useState("");

  const path = useLocation();
  useEffect(() => {
    setCurrentPath(path.pathname);
  }, [path.pathname]);

  return (
    <div className="fixed top-0 left-0 w-24 flex flex-col items-center py-8 gap-y-4 bg-secondary text-white shadow-lg h-screen border-r-4 border-green-500">
      <div className="p-2 h-18 w-18 rounded-xl text-4xl text-red">
        <FaFireAlt />
      </div>
      {SidebarData.map((item) => {
        return (
          <Link to={item.link}>
            <div
              className={
                currentPath === item.link
                  ? "sidebar-icon group bg-green-600 text-white rounded-xl"
                  : "sidebar-icon group"
              }
              key={item.title}
            >
              {item.icon}
              <span className="sidebar-tooltip group-hover:scale-100">
                {item.title}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export { VerticalNav };
