import AppDataSource from '../pgsql/pg.db'
import User from '../models/User.model'
const userRepository = AppDataSource.getRepository(User)

export const getPasswordFromUUID = async (userUID:string) :Promise<any> => {
  console.log(userUID)
  return (await userRepository.findOne({
    where:
    { UID: userUID }
  }))?.password
}
