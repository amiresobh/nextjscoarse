import { prisma } from "../../prisma/client";

export const delete_post = async ({ slug }) => {
  try {
    const deleted_post = prisma.post.delete({
      where: {
        slug: slug,
      },
    });

    return deleted_post;
  } catch (err) {
    throw new Error("حذف پست موفقیت آمیز نبود");
  }
};
