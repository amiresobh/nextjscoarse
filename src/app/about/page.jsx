import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import AboutHero from "../assets/svg/aboutHero";
// import Map from "@/components/map/Map";

const Map = dynamic(() => import("@/components/map/Map"), {
  ssr: false,
  loading: () => <p>A map is Loading</p>,
});
const AboutPage = () => {
  return (
    <div>
      <div className="md:flex gap-12">
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
              مرکز تخصصی طب کار آیین، محلی برای ارائه خدمات پزشکی و مشاوره در
              زمینه بهداشت و ایمنی کارکنان است. این مرکز با تیمی مجرب و متخصص،
              به منظور ارائه خدمات بهتر و متناسب با نیازهای شما، همواره در حال
              به روز رسانی و ارتقاء خدمات خود می‌باشد.
            </p>
            <div className="flex flex-col md:flex-row gap-16">
              <div className="flex flex-col gap-2">
                <h3 className="font-EstedadExtraBold text-4xl text-AccentColor">
                  +1000
                </h3>
                <h3 className="font-EstedadBold">مراجعه کننده</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-EstedadExtraBold text-4xl text-AccentColor">
                  +100
                </h3>
                <h3 className="font-EstedadBold">شرکت طرف قرارداد</h3>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-EstedadExtraBold text-4xl text-AccentColor">
                  +100
                </h3>
                <h3 className="font-EstedadBold">پرسنل</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center ">
          <AboutHero />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
