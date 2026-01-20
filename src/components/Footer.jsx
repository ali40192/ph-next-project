import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">My Items</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            A modern Next.js application built with performance, scalability,
            and clean UI in mind.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/items" className="hover:text-white transition">
                Items
              </Link>
            </li>
            <li>
              <Link href="/add-item" className="hover:text-white transition">
                Add Item
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition cursor-pointer">
              Documentation
            </li>
            <li className="hover:text-white transition cursor-pointer">
              API Reference
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4">Connect</h3>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>© 2026 My Items. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Built with ❤️ using Next.js & MongoDB</p>
        </div>
      </div>
    </footer>
  );
}
