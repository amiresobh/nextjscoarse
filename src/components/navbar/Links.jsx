import React from "react";
import NavLink from "./NavLink";

const Links = ({ className }) => {
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
  return (
    <div className={className}>
      {links.map((link, index) => {
        return <NavLink linkItem={link} key={index} />;
      })}
    </div>
  );
};

export default Links;
