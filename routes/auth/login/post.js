import { prisma, Prisma } from '@database'
import jwt from 'jsonwebtoken'
import * as auth from '@helpers/auth/jwt'
import * as hash from '@helpers/auth/hash_password'

import { Exception } from '@sentry/node'

async function login(req, res) {
  const { userInfo, password } = req.body
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: userInfo }, { phone_number: userInfo }],
      },
    })
    if (!user)
      return res.status(400).json({
        message: 'User not found!',
      })
    const isMatch = await hash.comparePass(password, user.password)
    if (!istMatch) {
      return res.status(400).json({
        message: 'Password is not correct',
      })
    }
    const token = auth.signToken({ id: user.id, userInfo })
    const { name, email, phone_number, date_of_birth } = user
    res.status(200).json({
      message: 'Login successfully',
      metaData: {
        token,
        name,
        email,
        phone_number,
        date_of_birth,
      },
    })
  } catch (err) {
    res.status(500).json({
      message: 'Server Error',
    })
  }
}

export default login
