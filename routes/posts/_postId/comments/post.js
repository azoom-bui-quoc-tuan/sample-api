/**
 * @type {import('express').RequestHandler}
 */
import { prisma } from '@database'
export default async(req, res) => {
    const post = await prisma.post.create({
        data: req.body,
    })
    res.status(200).json({
        data: post,
    })
}