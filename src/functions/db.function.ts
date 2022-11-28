import AppDataSource from '../pgsql/pg.db'
import User from '../models/User.model'
const userRepository = AppDataSource.getRepository(User)

export const getPasswordFromUUID = async (userUID:string) :Promise<any> => {
  return (await userRepository.findOne({
    where:
    { UID: userUID }
  }))?.password
}

export const addInvalidTry = async (userUID:string) :Promise<any> => {
  const tries = await userRepository.findOne({
    where:
      { UID: userUID }
  }))?.tries

  return (await userRepository.update({
    tries: tries+1,
    where: {
      UID: userUID
    }
  }))
}
