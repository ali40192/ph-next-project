"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`relative px-1 py-2 transition-all duration-300
        ${
          active
            ? "text-black font-semibold"
            : "text-gray-600 hover:text-gray-900"
        }
      `}
    >
      {children}

      {/* underline animation */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300
          ${active ? "w-full" : "w-0 group-hover:w-full"}
        `}
      />
    </Link>
  );
}

export default NavLink;
