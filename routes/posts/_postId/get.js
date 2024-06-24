/**
 * @type {import('express').RequestHandler}
 */
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function getPostById(postId) {
    const post = await prisma.post.findUnique({
        where: {
            id: postId,
        },
    })
    return post
}

export default (req, res) => {
    console.log('getFuction')
    res.send("hihi");
}