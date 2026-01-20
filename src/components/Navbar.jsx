import Link from "next/link";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-xl font-semibold text-gray-800">My App</h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <NavLink href="/">Home</NavLink>

          <NavLink href="/items">Items</NavLink>
          <NavLink href="/add-item">Add Item</NavLink>

          <NavLink href="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  );
}
