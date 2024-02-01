import React from "react";

const FormCard = ({svg}) => {
  return (
    <div className="flex justify-start gap-4 shadow-xl rounded-2xl px-2 pb-7 mt-9 w-full p-5">
      <div className="sm:flex justify-center items-center hidden">
        {svg}
      </div>
      <div className="flex flex-col gap-5 w-full">
        <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
          ارتباط مستقیم با مرکز
        </h1>
        <div className="font-EstedadBold">
          <form action="" className="flex flex-col gap-7 !w-full ">
            <input
              type="text"
              placeholder="نام شما"
              className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "
            />
            <input
              type="text"
              placeholder="شماره تماس"
              className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "
            ></textarea>
            <button className="px-7 py-5 bg-ActiveColor text-WhiteTextColor border-none rounded-lg">
              {" "}
              ارسال{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
