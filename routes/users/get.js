import { prisma } from '@database'
const getUsers = async (req, res) => {
  try {
    const users = await prisma.getMany({
      where: { is_deleted: false },
      include: {
        posts: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        phone_number: true,
        email: true,
        posts: true,
      },
    })
    res.status(200).json({
      metaData: users,
    })
  } catch (error) {
    next(error)
  }
}
export default getUsers
