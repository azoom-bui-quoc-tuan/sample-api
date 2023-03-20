import { prisma } from '@database'

const getUserById = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    })
    res.status(200).json({
      metaData: user,
    })
  } catch (error) {
    next(error)
  }
}
export default getUserById
