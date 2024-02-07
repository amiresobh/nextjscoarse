'use server'
import { revalidatePath } from 'next/cache'
import { create_post } from "./createPost"
import { delete_post } from './deletePost'

export const add_post_action = async (formData) => {
    const {title, description, slug, userId} = Object.fromEntries(formData)
    
    const new_post = await create_post({title,body: description, slug, userId})
    revalidatePath('/blog')
}

export const delete_post_action = async (formData) => {
    const {slug} = Object.fromEntries(formData)

    const deleted_post = await delete_post({slug})
    revalidatePath('/blog')
}
