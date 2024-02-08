import React from "react";
import Image from "next/image";

import { get_user_by_userId } from "@/lib/dbGetFunctions";

const PostDetails = async ({ post }) => {
  const user = await get_user_by_userId(post.userId);

  return (
    <div className="flex gap-3 items-center">
      <div className="relative w-12 h-12 rounded-full overflow-hidden">
        <Image
          src={user.image ? user.image : "/images/user_cover.jpg"}
          className="object-cover -z-50"
          alt="Blog_Image"
          fill
        />
      </div>
      <div className="flex text-sm gap-5">
        <div className="flex flex-col gap-1">
          <span className="text-AccentColor">نویسنده </span>
          <span> {user.username} </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-AccentColor">تاریخ</span>
          <span>
            {" "}
            {post.createdAt.getFullYear()}/{post.createdAt.getMonth()}/
            {post.createdAt.getDay()}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
