import User from 'src/models/User.model'
import { DataSource } from 'typeorm'
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: []
})

export default AppDataSource
