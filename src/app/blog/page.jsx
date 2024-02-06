import PostCard from "@/components/postCard/PostCard";
import React from "react";
import { get_posts } from "../../lib/data";
import { create_user } from "@/lib/createUser";
import { create_post } from "@/lib/createPost";

const BlogPage = async () => {
  // const new_post = await create_post()
  // console.log(new_post)    

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
