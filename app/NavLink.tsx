import Link from "next/link";
import React from "react";

type Props = { category: string; isActive: boolean };

const NavLink = (props: Props) => {
  return (
    <div>
      <Link
        href={`/news/${props.category}`}
        className={`hover:underline decoration-orange-400 text-center decoration-2 active:underline underline-offset-8 rounded-full p-4 cursor-pointer hover:font-bold capitalize hover:scale-110 transition-transform duration-200 ease-out ${
          props.isActive &&
          "underline decoration-orange-400 underline-offset-4 font-bold text-lg"
        }`}
      >
        {props.category}
      </Link>
    </div>
  );
};

export default NavLink;
