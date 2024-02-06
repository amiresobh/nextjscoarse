import { prisma } from "../../prisma/client";

const users = [
  { id: 1, name: "امیر" },
  { id: 2, name: "مهرناز" },
];

const posts = [
  { id: 1, title: "Post 1", body: "This is post 1", userId: 1 },
  { id: 2, title: "Post 2", body: "This is post 2", userId: 1 },
  { id: 2, title: "Post 3", body: "This is post 3", userId: 2 },
  { id: 2, title: "Post 4", body: "This is post 4", userId: 2 },
  { id: 2, title: "Post 5", body: "This is post 5", userId: 1 },
];

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

export const get_user = async (id) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user");
  }
};

