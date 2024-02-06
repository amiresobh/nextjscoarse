import { prisma } from "../../prisma/client";

export const create_post = async () => {
  const new_post = prisma.post.create({
    data: {
      userId: 10,
      title: 'پست سوم',
      body: 'متن پست سوم',
      slug: 'پست-سوم',

    },
  });

  return new_post;
};
