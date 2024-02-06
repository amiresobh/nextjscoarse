import React from "react";
import Image from "next/image";
import Link from "next/link";

// import cover from "@/images/cover.jpg";
const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col gap-5 mb-10 shadow-xl rounded-3xl p-3">
      <div className="flex">
        <div className="w-full h-96 relative">
          <span className="text-base text-WhiteTextColor -rotate-12 bg-TextColor bg-opacity-30 rounded-full p-1 float-end -mx-5">
            {post.createdAt.getFullYear()}/{post.createdAt.getMonth()}/
            {post.createdAt.getDay()}
          </span>
          <Image
            className="object-cover -z-50"
            src={post.imageUrl ? post.imageUrl : "/images/cover.jpg"}
            alt="Blog_Image"
            fill
          />
        </div>
      </div>
      <div>
        <Link href={`/blog/${post.slug}`} className="">
          <h1 className="font-EstedadBold text-3xl mb-4"> {post.title} </h1>
        </Link>
        <p className="text-base text-SoftTextColor mb-3 ">{post.body}</p>
        <Link href={`/blog/${post.slug}`} className="underline">
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
