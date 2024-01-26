"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ linkItem, className, onClick }) => {
  const pathname = usePathname();

  return (
    <Link
      onClick={onClick}
      href={linkItem.path}
      className={`${className} hover:text-AccentColor 
      ${pathname == linkItem.path && "!text-AccentColor !font-EstedadBold "} 
        transition-colors`}
    >
      {linkItem.title}{" "}
    </Link>
  );
};

export default NavLink;
