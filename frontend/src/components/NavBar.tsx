'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black border-b border-gray-800 shadow-lg">
      <div className="text-white text-2xl font-bold tracking-wide">
        <Link href="/">🎶 Tunez</Link>
      </div>
      <div className="space-x-6">
        <Link
          href="/"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Home
        </Link>
        <Link
          href="/explore"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Explore
        </Link>
        <Link
          href="/favourites"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Favourites
        </Link>
        <Link
          href="/contact"
          className="text-gray-300 hover:text-indigo-400 transition duration-300 font-medium"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
} 