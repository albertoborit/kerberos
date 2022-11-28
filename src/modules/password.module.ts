import { getPasswordFromUUID, addInvalidTry } from '../functions/db.function'

export const verify = async (password:string, userUID:string) :Promise<any> => {
  return password === await getPasswordFromUUID(userUID)
}

export const invalidTry = async (userUID:string) :Promise<any> => {
  return await addInvalidTry(userUID)
}
