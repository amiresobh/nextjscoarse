import React from "react";
import Links from "./Links";
import NavLink from "./NavLink";
import AccountIcon from "./AccountIcon";

const Navbar = () => {
  const session = true;
  const isAdmin = true;

  return (
    <div className="bg-ActiveColor rounded-3xl flex py-5 px-3 justify-around items-center text-WhiteTextColor h-16">
      <div className="">Logo</div>
      
      <div className="">
        <Links className="" />
      </div>
        
      <div className="flex items-center">
        <butto>
          <AccountIcon className="w-6"/>
        </butto>
        {/* {session ?
          <>
            {isAdmin && <NavLink linkItem={{path: '/admin', title: 'ادمین'}} />}
            <button className="bg-AlertColor px-4 py-2 rounded-2xl font-EstedadBold" > خروج </button>
          </>
        :
          <NavLink linkItem={{path:'/login', title: 'ورود'}} />
         } */}
      </div>
    </div>
  );
};

export default Navbar;
