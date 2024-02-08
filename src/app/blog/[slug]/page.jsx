import React, { Suspense } from "react";
import Image from "next/image";

import PostDetails from "./postDetails";
import { get_post } from "@/lib/dbGetFunctions";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await get_post(decodeURIComponent(slug));
  
  return {
    title: post.title,
    description: post.body,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  const post = await get_post(decodeURIComponent(slug));

  return (
    <div className="flex flex-col sm:flex-row gap-12 mt-2">
      <div className="sm:flex-1 relative w-full h-[40vh] sm:h-screen rounded-xl overflow-hidden">
        <Image
          src={post.imageUrl ? post.imageUrl : "/images/cover.jpg"}
          className="object-cover -z-50"
          alt="Blog_Image"
          fill
        />
      </div>
      <div className="flex flex-[2] flex-col gap-5">
        <h1 className="text-6xl font-EstedadBold"> {post.title} </h1>
        <Suspense fallback={<div> ... </div>}>
          <PostDetails post={post} />
        </Suspense>
        <div>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
