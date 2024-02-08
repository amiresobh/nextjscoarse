"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuBTN from "./MenuBTN";
import CloseBTN from "./CloseBTN";

const links = [
  {
    title: "خانه",
    path: "/",
  },
  {
    title: "خدمات",
    path: "/services",
  },
  {
    title: "نوبت دهی آنلاین",
    path: "/schedule",
  },
  {
    title: "مقالات",
    path: "/blog",
  },
  {
    title: "آموزش ها",
    path: "/learnings",
  },
  {
    title: "نتیجه آزمایش",
    path: "/results",
  },
  {
    title: "درباره ما",
    path: "/about",
  },
  {
    title: "تماس با ما",
    path: "/contact",
  },
];

const Links = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className} `}>
      <div className="hidden lg:block">
        {links.map((link, index) => {
          return <NavLink className="mx-3" linkItem={link} key={index} />;
        })}
      </div>

      <button
        className="lg:hidden flex gap-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {!isOpen ? (
          <>
            <MenuBTN /> منو
          </>
        ) : (
          <>
            <CloseBTN /> بستن
          </>
        )}
      </button>

      {/* <div className={`${!isOpen && 'hidden'}  tras absolute lg:top-[83px] top-[64px] right-0 h-full w-1/4 min-w-48 bg-ActiveColor flex flex-col pt-10 gap-5 px-6`}> */}

      <div
        className={`
        ${
          !isOpen && "translate-x-[100%]"
        }  lg:hidden transition-all duration-300 translate-x-0 absolute lg:top-[83px] top-[64px] right-0 h-[100vh] w-1/4 min-w-48 bg-ActiveColor flex flex-col pt-10 gap-5 px-6`}
      >
        <button className="" onClick={() => setIsOpen(false)}>
          <CloseBTN />
        </button>
        {links.map((link, index) => {
          return (
            <NavLink
              className="bg-WhiteTextColor bg-opacity-10 px-3 py-1 rounded-2xl"
              linkItem={link}
              key={index}
              onClick={() => setIsOpen(false)}
            />
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Links;
