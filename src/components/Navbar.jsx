"use client";

import { useState } from "react";
import NavLink from "./NavLink";
import { Home, List, PlusSquare, LogIn, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <h1 className="text-xl font-semibold text-gray-800">My Items</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <NavLink href="/">
              <span className="flex items-center gap-1">
                <Home size={16} />
                Home
              </span>
            </NavLink>

            <NavLink href="/items">
              <span className="flex items-center gap-1">
                <List size={16} />
                Items
              </span>
            </NavLink>

            <NavLink href="/add-item">
              <span className="flex items-center gap-1">
                <PlusSquare size={16} />
                Add Item
              </span>
            </NavLink>

            <NavLink href="/login">
              <span className="flex items-center gap-1">
                <LogIn size={16} />
                Login
              </span>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
            <NavLink href="/" onClick={() => setOpen(false)}>
              <span className="flex items-center gap-2">
                <Home size={16} />
                Home
              </span>
            </NavLink>

            <NavLink href="/items" onClick={() => setOpen(false)}>
              <span className="flex items-center gap-2">
                <List size={16} />
                Items
              </span>
            </NavLink>

            <NavLink href="/add-item" onClick={() => setOpen(false)}>
              <span className="flex items-center gap-2">
                <PlusSquare size={16} />
                Add Item
              </span>
            </NavLink>

            <NavLink href="/login" onClick={() => setOpen(false)}>
              <span className="flex items-center gap-2">
                <LogIn size={16} />
                Login
              </span>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
