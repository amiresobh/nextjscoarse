"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

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
    title: "اخبار و مقالات",
    path: "/blog",
  },
  {
    title: "آموزش ها",
    path: "/learnings",
  },
  {
    title: "فرم ها",
    path: "/forms",
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
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`${className} `}>

      {links.map((link, index) => {
        return <NavLink linkItem={link} key={index} />;
      })}

      <button onClick={() => setIsOpen((prev) => !prev)}> منو </button>

      {isOpen && (
        <div className="absolute top-[83px] right-0 h-full w-1/4 bg-ActiveColor flex flex-col pt-10 gap-5 pr-6">
          <button className="flex items-start mx-6 w-min p-4" onClick={()=> setIsOpen(false)}>
            X
          </button>
          {links.map((link, index) => {
            return <NavLink linkItem={link} key={index} />;
          })}{" "}
        </div>
      )}
    </div>
  );
};

export default Links;
