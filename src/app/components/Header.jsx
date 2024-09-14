"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30 p-3">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* logo */}
        <Link href="/" aria-label="Homepage">
          <Image
            src="/Instagram_logo_black.webp"
            width={96}
            height={96}
            alt="Instagram Logo"
            className="hidden lg:inline-flex"
          />
          <Image
            src="/800px-Instagram_logo_2016.webp"
            width={40}
            height={40}
            alt="Instagram Logo"
            className="sm:inline-flex lg:hidden"
          />
        </Link>

        {/* search input */}
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 border border-gray-200 rounded text-sm w-full py-2 px-4 max-w-[210px] focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* menu items */}

        {session ? (
          <img
            src={session.user.image}
            alt={session.user.name}
            className="h-10 w-10 rounded-full cursor-pointer"
            onClick={signOut}
          />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
          >
            Log In
          </button>
        )}
      </div>
    </div>
  );
}
