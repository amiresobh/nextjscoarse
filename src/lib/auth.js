import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'

import bcrypt from "bcrypt";

import { get_user_by_username } from "./dbGetFunctions"

const login = async (credentials) => {
    try{
        const user = await get_user_by_username(credentials.username)
        if(!user) {
            return 'نام کاربری یا رمز عبور اشتباه است'
        } 
        const isPasswordCurrect = await bcrypt.compare(credentials.password, user.password)

        if(!isPasswordCurrect) return 'نام کاربری یا رمز عبور اشتباه است.'

        return user

    } catch(err) {
        console.log(err)
        throw new Error('خطا در ورود')
    }
}

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({ providers: [ CredentialsProvider({
    async authorize(credentials) {
        try{
            const user = await login(credentials)
            return user
        }catch(err){
            return null
        }
    }
}) ] })