import React from "react";
import { Button, Input } from "@mantine/core";

import { add_new_user, log_in } from "@/lib/actions";

const Login = () => {
  return (
    <div>
      <h1 className="font-EstedadExtraBold text-3xl lg:text-4xl text-SoftTextColor sticky">
        ورود
      </h1>
      <div className="flex justify-center items-center">
        <form
          action={log_in}
          className="flex flex-col shadow-2xl rounded-xl p-5 md:px-10 md:py-20 gap-5"
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
          <Button type="submit" className="mt-6 font-EstedadBold !text-xl" size="lg"> ورود </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
