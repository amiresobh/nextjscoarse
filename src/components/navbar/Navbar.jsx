import React from "react";
import Links from "./Links";

const Navbar = () => {
  return (
    <div className="bg-ActiveColor rounded-3xl flex py-5 px-3 justify-around align-middle text-WhiteTextColor">
      <div className="">Logo</div>
      <div className="">
        <Links className="" />
      </div>
      <div className="">ورود</div>
    </div>
  );
};

export default Navbar;
