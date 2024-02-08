import { prisma } from "../../prisma/client";
import { get_user_by_email, get_user_by_username } from "./dbGetFunctions";

export const create_post = async ({ userId, title, body, slug }) => {
  try {
    const new_post = prisma.post.create({
      data: {
        userId: parseInt(userId),
        title: title,
        body: body,
        slug: slug,
      },
    });

    return new_post;
  } catch (err) {
    throw new Error("ایجاد پست جدید موفقیت آمیز نبود");
  }
};

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

export const create_user = async ({ username, password, email }) => {
  const isUsernameExists = await get_user_by_username(username);
  const isEmailExists = await get_user_by_email(email)
  if(isUsernameExists){
    return 'نام کاربری تکراری می باشد.'
  } else if (isEmailExists){
    return 'ایمیل تکراری می باشد'
  } else {
    const new_user = await prisma.user.create({
      data: {
        username: username,
        password: password,
        email: email,
        isAdmin: false,
      },
    });

    return new_user;
  }

};
