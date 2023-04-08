import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-9 px-8 mb-20 mt-10">
      <Link to="/" title="Hero Gadget">
        <div className="flex gap-2 items-center">
          <div className="p-4 bg-cyan-200 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="currentColor"
              className="flex-shrink-0 w-4 h-4  text-cyan-700  "
            >
              <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
            </svg>
          </div>
          <span className="font-bold text-xl">Hero Gadget</span>
        </div>
      </Link>

      <nav className="flex gap-5 font-bold">
        <NavLink className= {({ isActive }) => (isActive ? 'active' : 'default')} to="/">Home</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/shop">Shop</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/cart">
          <ShoppingCartIcon className="h-6 w-6 text-gray-700"></ShoppingCartIcon>
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'default')} to="/about">About us</NavLink>
      </nav>
    </div>
  );
};

export default Header;
