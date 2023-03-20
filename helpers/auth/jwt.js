import jwt from 'jsonwebtoken'
export const signToken = data => {
  try {
    return jwt.sign(data, process.env.JWT_KEY, {
      expireInS: process.env.JWT_TOKEN_EXPIRE,
    })
  } catch (error) {
    throw error
  }
}

export const decodeJwtToken = token => {
  try {
    return jwt.verify(token, process.env.JWT_KEY)
  } catch (err) {
    throw new Error('Unauthenticated')
  }
}
