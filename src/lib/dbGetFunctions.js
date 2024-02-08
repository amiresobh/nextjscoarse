import { prisma } from "../../prisma/client";

export const get_posts = async () => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts");
  }
};

export const get_post = async (slug) => {
  try {
    const post = await prisma.post.findUnique({ where: { slug: slug } });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post");
  }
};

export const get_users = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users");
  }
};

export const get_user_by_userId = async (userId) => {
  try {
    const user = await prisma.user.findUnique({ where: { userId: userId } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

export const get_user_by_username = async (username) => {
  try {
    const user = await prisma.user.findUnique({ where: { username: username } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};
export const get_user_by_email = async (email) => {
  try {
    const user = await prisma.user.findUnique({ where: { email: email } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

