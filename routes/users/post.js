/**
 * @type {import('express').RequestHandler}
 */
import { prisma } from '@database'
import { hashPass } from '@helpers/auth/hash_password'

const register = async(req, res, next) => {
    try {
        const userInfo = req.body.data
        const user = prisma.findUnique({
            where: {
                OR: [
                    { email: user.email },
                    {
                        phone_number: user.phone_number,
                    },
                ],
            },
        })
        if (user)
            return res
                .status(400)
                .json({ message: 'Email or Phone number is already existed' })
        user.password = await hashPass(user.password)
        const createdUser = await prisma.create({
            data: { user },
        })
        if (!createdUser) throw new Error("Can't create new user")
    } catch (error) {
        next(error)
    }
}
export default register