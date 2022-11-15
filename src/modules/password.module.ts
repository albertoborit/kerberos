import { getPasswordFromUUID } from '../functions/db.function'

export const verify = async (password:string, userUID:string) :Promise<any> => {
  return password === await getPasswordFromUUID(userUID)
}
