/**
 * @type {import('express').RequestHandler}
 */
import { PrismaClient } from '@prisma/client'
export default async (req, res) => {
  console.log('object')
  const prisma = new PrismaClient()
  res.send({ e: 3 })
}
