import React from "react";
import Links from "./Links";
import Image from "next/image";
import AccountIcon from "./AccountIcon";
import Logo from "@/app/assets/imgaes/Logo.png";

const Navbar = () => {
  const session = true;
  const isAdmin = true;

  return (
    <nav className="bg-ActiveColor rounded-bl-xl lg:rounded-3xl flex py-5 px-3 justify-around items-center text-WhiteTextColor h-16">
      <div className="inline-block w-32">
        <Image className="" src={Logo} alt="logo" />
      </div>

      <div className="w-full items-start mx-2">
        <Links className="" />
      </div>

      <div className="flex items-center">
        <butto>
          <AccountIcon className="w-6" />
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
    </nav>
  );
};

export default Navbar;
