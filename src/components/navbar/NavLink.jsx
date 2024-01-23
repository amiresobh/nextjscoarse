"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ linkItem }) => {
  const pathname = usePathname();

  return (
    <Link
      href={linkItem.path}
      className={`mx-6 hover:text-AccentColor ${
        pathname == linkItem.path && "!text-AccentColor"
      } transition-colors`}
    >
      {linkItem.title}{" "}
    </Link>
  );
};

export default NavLink;
