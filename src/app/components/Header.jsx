"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import Modal from "react-modal";
import { IoMdAddCircleOutline } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { data: session } = useSession();
  const [ModalIsOpen, setModalIsOpen] = React.useState(false);
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
          <div className="flex gap-2 items-center">
            <IoMdAddCircleOutline
              className="text-2xl cursor-pointer transform hover:scale-125 transition  duration-300 hover:text-red-300"
              onClick={() => setModalIsOpen(true)}
            />
            <img
              src={session.user.image}
              alt={session.user.name}
              className="h-10 w-10 rounded-full cursor-pointer"
              onClick={signOut}
            />
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="text-sm font-semibold text-blue-500 hover:text-blue-700 transition-colors"
          >
            Log In
          </button>
        )}
      </div>
      {ModalIsOpen && (
        <Modal
          isOpen={ModalIsOpen}
          className="max-w-lg w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <HiCamera className="text-5xl text-gray-400 cursor-pointer" />
          </div>
          <input
            type="text"
            maxLength="150"
            placeholder="Please enter your caption ..."
            className="m-4 border-none text-center w-full focus:ring-0 outline-none"
          />
          <button className="w-full bg-red-600 text-wide p-2 shadow-md rounded-lg hover:brightness-105 disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100">
            {" "}
            Upload Post
          </button>

          <AiOutlineClose
            className="cursor-pointer absolute top-2 right-2 hover:text-red-600"
            onClick={() => setModalIsOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
}
