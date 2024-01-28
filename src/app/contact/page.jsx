import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import AboutHero from "../assets/svg/aboutHero";
import LocationSVG from "./LocationSVG";
import PhoneSVG from "./PhoneSVG";
import ClockSVG from "./ClockSVG";
import MessagesSVG from "./MessagesSVG";
// import Map from "@/components/map/Map";

const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-64 w-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex justify-center items-center">
      {" "}
      <h2> آدرس مرکز روی نقشه </h2>{" "}
    </div>
  ),
});
const Contact = () => {
  return (
    <div>
      <div className="md:flex">
        <div className="flex flex-wrap space-x-4">
          <h2 className="font-EstedadExtraBold text-3xl lg:text-4xl text-SoftTextColor sticky">
            {" "}
            تماس با ما{" "}
          </h2>
          <div className="flex justify-start gap-4 shadow-xl rounded-2xl items-center px-2 pb-7 mt-9 w-fit p-10">
            <div className="flex justify-center items-center">
              <LocationSVG />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
                مراجعه حضوری به مرکز طب کار آیین
              </h1>
              <p className="text-lg">
                مرکز تخصصی طب کار آیین، در شهر بندرعباس، خیابان سیدجمال الدین
                واقع شده است. جنب کوچه شیرینکده
              </p>
            </div>
          </div>
          <div className="flex justify-start gap-4 shadow-xl rounded-2xl items-center px-2 pb-7 mt-9 w-fit p-10">
            <div className="flex justify-center items-center">
              <ClockSVG />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
                ساعات کاری مرکز
              </h1>
              <div className="font-EstedadBold ">
                <p> 16 تا 18 </p>
              </div>
            </div>
          </div>
          <div className="flex justify-start gap-4 shadow-xl rounded-2xl items-center px-2 pb-7 mt-9 w-fit p-10">
            <div className="flex justify-center items-center">
              <PhoneSVG />
            </div>
            <div className="flex flex-col gap-2 ">
              <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
                تماس با مرکز طب کار آیین
              </h1>
              <div className="font-EstedadBold ">
                <p> 076 - 00000000 </p>
                <p> 076 - 00000000 </p>
                <p> 076 - 00000000 </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center px-2 pb-7 shadow-xl rounded-2xl h-max mt-9">
          <div className="">
            <Map />
          </div>
          <h2>بندرعباس - خیابان - کوچه - جنب شیرینکده</h2>
        </div>
      </div>
      <div className="flex justify-start gap-4 shadow-xl rounded-2xl px-2 pb-7 mt-9 w-full p-5">
        <div className="sm:flex justify-center items-center hidden">
          <MessagesSVG />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="font-EstedadExtraBold text-xl lg:text-2xl !leading-tight ">
            ارتباط مستقیم با مرکز
          </h1>
          <div className="font-EstedadBold">
            <form action="" className="flex flex-col gap-7 !w-full "> 
              <input type="text" placeholder="نام شما" className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "/>
              <input type="text" placeholder="شماره تماس" className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "/>
              <textarea name="" id="" cols="30" rows="10" className="p-4 rounded-lg bg-WhiteTextColor text-TextColor outline-none "></textarea>
              <button className="px-7 py-5 bg-ActiveColor text-WhiteTextColor border-none rounded-lg"> ارسال </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
