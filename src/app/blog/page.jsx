import PostCard from "@/components/postCard/PostCard";
import React from "react";
import { get_posts } from "../../lib/dbGetFunctions";

const BlogPage = async () => {

  const posts = await get_posts();

  return (
    <div className="flex flex-wrap gap-5 mt-3 justify-center">
      {posts.map((post) => (
        <div className="w-[100%] md:w-[45%] lg:w-[28%]">
          <PostCard post={post} key={post.id} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
