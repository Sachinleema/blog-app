import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/clerk-react";
import { useEffect } from "react";

const Navbar = () => {
  const [Open, setOpen] = useState(false);

  return (
    <div className="min-w-screen h-16 md:h-20 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-medium">
        <Image src="logo.png" alt="logo" w={32} h={32} />
        <span>Blogs.com</span>
      </Link>
      {/* Mobile menu*/}

      <div className="flex md:hidden ">
        <div
          className="text-4xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {Open ? <X /> : <Menu />}
        </div>
        <div
          className={`w-full min-h-screen flex flex-col justify-center absolute top-16 transition-all ease-linear  ${
            Open ? "right-0" : "-right-[100%]"
          }`}
        >
          <div className=" flex  flex-col items-center gap-12 xl:gap-12 bg-white h-screen pt-10 ">
            <Link to="/">Home</Link>
            <Link to="/">Trending</Link>
            <Link to="/">Most Popular</Link>
            <Link to="/">About</Link>

            <SignedOut>
              <Link to="/login">
                <button className="py-2 px-6 bg-blue-800 rounded-3xl text-white">
                  Login
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-6 bg-blue-800 rounded-3xl text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
