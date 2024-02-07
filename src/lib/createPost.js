import { prisma } from "../../prisma/client";

export const create_post = async ({userId,title,body,slug}) =>{
  try{
    const new_post = prisma.post.create({
      data: {
        userId: parseInt(userId),
        title: title,
        body: body,
        slug: slug,
  
      },
    });
    
    return new_post;

  } catch(err) {
    throw new Error('ایجاد پست جدید موفقیت آمیز نبود')
  }
};
