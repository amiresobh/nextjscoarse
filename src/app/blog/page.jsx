import PostCard from "@/components/postCard/PostCard";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-wrap gap-5 mt-3">
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      <div className="w-[100%] md:w-[45%] lg:w-[30%]">
        <PostCard />
      </div>
      
    </div>
  );
};

export default BlogPage;
