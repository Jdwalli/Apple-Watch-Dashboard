import React, { useState, useEffect, FunctionComponent } from "react";
import { SidebarData } from "../../helpers/SidebarData";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaUpload
} from "react-icons/fa";

const Header: FunctionComponent = () => {
  return (
    // Do some addition 
    <div className="bg-secondary flex justify-between items-center p-4 text-white">
        <span className="flex-grow text-2xl"> Apple Watch Dashboard </span> 
        <div className="flex pr-2">
            <div className="flex" > <FaUser /> Sign in </div>
            <div className="flex"> <FaUpload /> Upload </div>
        </div>
    </div>
  );
};

export { Header };
