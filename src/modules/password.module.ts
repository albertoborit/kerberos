import { getPasswordFromUUID } from '../functions/db.function'

export const verify = async (password:string, userUID:string) => {
  return password === await getPasswordFromUUID(userUID)
}

module.exports = { verify }
