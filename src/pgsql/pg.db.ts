import 'reflect-metadata'
import User from 'src/models/User.model'
import { DataSource } from 'typeorm'
const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'credentials',
  synchronize: true,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: []
})

AppDataSource.initialize()
  .then(() => {
    console.log('PostgreSQL Data Source has been initialized')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err)
  })

export default AppDataSource
