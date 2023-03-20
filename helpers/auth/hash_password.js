import bcrypt from 'bcrypt'

export const hashPass = async pass => {
  return await bcrypt.hash(pass, 10)
}

export const comparePass = async (pass, hashedPass) => {
  try {
    return await bcrypt.compare(pass, hashedPass)
  } catch {
    throw err
  }
}
