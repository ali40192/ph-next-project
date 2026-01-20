"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors ${
        active
          ? "text-black font-semibold border-b-2 border-black"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
