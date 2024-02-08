"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Button, Text, rem } from "@mantine/core";

import AccountIcon from "./AccountIcon";
import { log_out } from "@/lib/actions";

const RegisterBtn = () => {
  return (
    <Link href="/register">
      <Button color="green">ثبت نام</Button>
    </Link>
  );
};
const SignInBtn = () => {
  return (
    <Link href="/login">
      <Button className="">ورود</Button>
    </Link>
  );
};
const SignOutBtn = () => {
  return (
    <form action={log_out}>
      <Button className="" type="submit" color="red">
        خروج
      </Button>
    </form>
  );
};

const AccountBtn = ({ session }) => {
  const [screenW, setScreenW] = useState(900);
  useEffect(() => {
    setScreenW(window.screen.width);

    window.addEventListener("resize", () => {
      setScreenW(window.screen.width);
    });
  }, []);

  const SmallScreenMenu = () => {
    return (
      <Menu shadow="xl">
        <Menu.Target>
          <button>
            <AccountIcon className="w-6" />
          </button>
        </Menu.Target>

        {session?.user ? (
          <Menu.Dropdown className="flex flex-col  ml-2 !w-40 md:!w-64">
            <Menu.Label className="font-EstedadBold">ناحیه کاربری</Menu.Label>
            <Menu.Item className="!flex !flex-col !justify-center !items-center">
              <SignInBtn />
            </Menu.Item>
          </Menu.Dropdown>
        ) : (
          <Menu.Dropdown className="flex flex-col  ml-2 !w-40 md:!w-64">
            <Menu.Label className="font-EstedadBold">ناحیه کاربری</Menu.Label>
            <Menu.Item className="!flex !flex-col !justify-center !items-center">
              <SignInBtn />
            </Menu.Item>
            <Menu.Item className="!flex !flex-col !justify-center !items-center">
              <RegisterBtn />
            </Menu.Item>
          </Menu.Dropdown>
        )}
      </Menu>
    );
  };

  const LargeScreenMenu = () => {
    return (
      <div className="flex gap-2">
        {session?.user ? (
          <SignOutBtn />
        ) : (
          <>
            <SignInBtn />
            <RegisterBtn />
          </>
        )}
      </div>
    );
  };

  return <>{screenW >= 768 ? <LargeScreenMenu /> : <SmallScreenMenu />}</>;
};

export default AccountBtn;
