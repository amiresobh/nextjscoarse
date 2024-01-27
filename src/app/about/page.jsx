import React from "react";
import Link from "next/link";
import AboutHero from "../assets/svg/aboutHero";

const AboutPage = () => {
  return (
    <div className="md:flex gap-[100px]">
      <div className="flex flex-col flex-1 justify-center ">
        <h2 className="font-EstedadExtraBold text-3xl lg:text-4xl text-SoftTextColor">
          {" "}
          درباره مرکز{" "}
        </h2>
        <div className="flex flex-col justify-center items-center gap-10 mt-10">

        <h1 className="font-EstedadExtraBold text-4xl lg:text-6xl !leading-normal ">
          ارائه کلیه خدمات سلامت شغلی کارکنان
        </h1>
        <p className="text-xl">
          مرکز تخصصی طب کار، محلی برای ارائه خدمات پزشکی و مشاوره در زمینه
          بهداشت و ایمنی کارکنان است. این مرکز با تیمی مجرب و متخصص، به منظور
          ارائه خدمات بهتر و متناسب با نیازهای شما، همواره در حال به روز رسانی و
          ارتقاء خدمات خود می‌باشد.
        </p>
        <div className="flex flex-col md:flex-row gap-7">
            
        </div>
        </div>
        
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <AboutHero />
      </div>
    </div>
  );
};

export default AboutPage;
