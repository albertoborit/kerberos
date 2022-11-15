import AppDataSource from '../pgsql/pg.db'
import User from '../models/User.model'
const userRepository = AppDataSource.getRepository(User)

export const getPasswordFromUUID = async (userUID:string) :Promise<string|undefined> => {
  return (await userRepository.findOneBy({
    UID: userUID
  }))?.password
}
