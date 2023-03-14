const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function getPostById(postId) {
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    })
    return post
}

export default async(req, res) => {}