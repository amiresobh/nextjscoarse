import React from "react";
import { Button, Input } from "@mantine/core";

import { add_new_user } from "@/lib/actions";

const RegisterPage = () => {
  return (
    <div>
      <h1 className="font-EstedadExtraBold text-3xl lg:text-4xl text-SoftTextColor sticky">
        ثبت نام
      </h1>
      <div className="flex justify-center items-center">
        <form
          action={add_new_user}
          className="flex flex-col shadow-2xl rounded-xl p-5 md:px-16 md:py-20 gap-5"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="!font-EstedadBold">
              نام کاربری
            </label>
            <Input
              size="lg"
              radius={"lg"}
              className="!font-EstedadBlack"
              variant="filled"
              type="text"
              placeholder="نام کاربری"
              name="username"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="!font-EstedadBold">
              ایمیل
            </label>
            <Input
              size="lg"
              radius={"lg"}
              className="!font-EstedadBlack"
              variant="filled"
              type="email"
              placeholder="ایمیل"
              name="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="!font-EstedadBold">
              رمز عبور
            </label>
            <Input
              size="lg"
              radius={"lg"}
              className="!font-EstedadBlack"
              variant="filled"
              type="password"
              placeholder="رمز عبور"
              name="password"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="!font-EstedadBold">
              تایید رمز عبور
            </label>
            <Input
              size="lg"
              radius={"lg"}
              className="!font-EstedadBlack"
              variant="filled"
              type="password"
              placeholder="تایید رمز عبور"
              name="confirmPassword"
              required
            />
          </div>
          <Button type="submit" className="mt-6 font-EstedadBold !text-xl" size="lg"> ثبت نام </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
