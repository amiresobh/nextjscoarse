import { prisma } from "../../prisma/client"

export const create_user = async () => {
    const new_user = prisma.user.create({
        data: {username: 'مهرناز', password: '123456', email: 'sobhania20@gmail.com', isAdmin: false}
    })

    return new_user
}