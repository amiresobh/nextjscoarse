"use server";
import { revalidatePath } from "next/cache";
import { create_post, create_user, delete_post } from "./dbPostFunctions";
import bcrypt from "bcrypt";
import { signIn, signOut } from "./auth";

export const add_post_action = async (formData) => {
  const { title, description, slug, userId } = Object.fromEntries(formData);

  const new_post = await create_post({
    title,
    body: description,
    slug,
    userId,
  });
  revalidatePath("/blog");
};

export const delete_post_action = async (formData) => {
  const { slug } = Object.fromEntries(formData);

  const deleted_post = await delete_post({ slug });
  revalidatePath("/blog");
};

export const add_new_user = async (formData) => {
  const { username, email, password, confirmPassword } =
    Object.fromEntries(formData);

  if (password != confirmPassword) {
    return "رمز عبور و تاییدیه آن یکسان نمی باشند.";
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const new_user = await create_user({
    username,
    email,
    password: hashedPassword,
  });

  console.log(new_user);
};

export const log_in = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  await signIn("credentials", {
    username,
    password,
  });
};

export const log_out = async () => {
  await signOut()
};
