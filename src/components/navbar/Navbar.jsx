import React from "react";
import Links from "./Links";
import Image from "next/image";
import Link from 'next/link'
import AccountIcon from "./AccountIcon";
import logo from "@/app/assets/imgaes/logo.png";

const Navbar = () => {
  const session = true;
  const isAdmin = true;

  return (
    <nav className="fixed w-full z-10 lg:w-11/12 self-center bg-ActiveColor rounded-bl-xl lg:rounded-3xl flex py-5 px-3 justify-around items-center text-WhiteTextColor h-16">
      <div className="relative w-24 h-24">
        <Link href='/'>
        <Image src={logo} alt="logo" fill />
        </Link>
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
