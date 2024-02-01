import React from "react";
import Image from "next/image";
import Link from "next/link";
import cover from "@/images/cover.jpg";
const PostCard = () => {
  return (
    <div className="flex flex-col gap-5 mb-10 shadow-xl rounded-3xl p-3">
      <div className="flex">
        <div className="w-full h-96 relative">
          <span className="text-base -rotate-12 bg-TextColor bg-opacity-30 rounded-full p-1 float-end ">
            1402.01.01{" "}
          </span>
          <Image
            className="object-cover -z-50"
            src={cover}
            alt="Blog_Image"
            fill
          />
        </div>
      </div>
      <div>
        <h1 className="font-EstedadBold text-3xl mb-4">تیتر پست</h1>
        <p className="text-base text-SoftTextColor mb-3">
          {" "}
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.{" "}
        </p>
        <Link href="/blog/post" className="underline">
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
