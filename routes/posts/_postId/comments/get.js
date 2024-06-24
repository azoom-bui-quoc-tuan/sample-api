/**
 * @type {import('express').RequestHandler}
 */
import { prisma } from '@database'
export default async (req, res) => {
  const post = await prisma.post.findFirst({
    where: {
      id: req.params.id,
    },
    include: {
      author: true,
      comments: true,
    },
  })
  res.status(200).json({
    data: post,
  })
}
