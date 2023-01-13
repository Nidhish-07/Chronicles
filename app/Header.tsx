import React from "react";
import { Bars4Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Search from "./Search";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="grid grid-cols-3 items-center p-10">
        <Bars4Icon className="w-6 h-6 cursor-pointer"></Bars4Icon>
        <Link href={"/"} prefetch={false}>
          <h2 className="font-serif text-4xl flex-1 text-center">News App</h2>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          <button className="hidden md:inline bg-slate-600 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800">
            Learn More
          </button>
        </div>
      </div>
      <NavLinks></NavLinks>
      <Search></Search>
    </header>
  );
};

export default Header;
