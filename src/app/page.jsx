import Link from 'next/link'
import HeroSVG from "./assets/svg/hero";

export default function Home() {
  return (
    <div className="md:flex gap-12">
      <div className="flex flex-col flex-1 gap-6 lg:gap-12 justify-center items-center">
        <h1 className="font-EstedadExtraBold text-5xl lg:text-8xl !leading-normal text-center">
          {" "}
          مرکز تخصصی 
          طب کار آیین{" "}
        </h1>
        <p className="text-xl w-3/4">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      <div className="flex flex-col md:flex-row gap-7">
        <Link href='/about' className="px-10 md:px-15 lg:px-20 text-center py-4 font-EstedadBold min-w-32 border-none rounded-lg bg-ActiveColor text-WhiteTextColor">
          {" "}
          درباره ما{" "}
        </Link>
        <Link href='/contact' className="px-10 md:px-15 lg:px-20 text-center py-4 font-EstedadBold min-w-32 border-none rounded-lg bg-AccentColor">
          {" "}
          تماس با ما{" "}
        </Link>
      </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <HeroSVG />
      </div>
    </div>
  );
}
