import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import SecurityRoutes from './routes/modules.routes'
import * as dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT

const app = express()
app.use(
  cors({
    origin: [`http://127.0.0.1:8000`],
  })
)

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieParser())

app.use('/security', SecurityRoutes)

app.listen(port, () => {
  console.log(`express server on port ${port}`)
})
