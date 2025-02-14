import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [productsSectionClicked, setProductsSectionClicked] = useState(false);
  return (
    <header className="shadow-md pr-6 py-6 w-full scroll-mb-24 z-10 bg-[#F2F0F1] text-black">
      <div className="flex items-center justify-between w-[95%] md:w-[90%] lg:w-[85%] mx-auto">
        <a href="/" className="font-integral_bold text-3xl pr-4">
          TICKET.CO
        </a>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            onClick={() => setProductsSectionClicked(false)}
            className={({ isActive }) =>
              isActive && !productsSectionClicked
                ? "border-b-2 border-blue-500"
                : ""
            }
          >
            Home
          </NavLink>
          <a
            href="/details"
            onClick={() => setProductsSectionClicked(true)}
            className={`${
              productsSectionClicked ? "border-b-2 border-blue-500" : ""
            }`}
          >
            form
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
