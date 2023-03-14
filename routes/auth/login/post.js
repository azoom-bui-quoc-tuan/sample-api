const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function login(email, password) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        })

        if (!user) {
            throw new Error('Invalid email or password')
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)

        if (!isPasswordValid) {
            throw new Error('Invalid email or password')
        }

        return user
    } catch (error) {
        throw error
    }
}

export default login