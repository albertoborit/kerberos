import express, { json, urlencoded } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import PasswordRoutes from './routes/modules.routes'
const app = express()
app.use(
  cors({
    origin: ['http://localhost'],
    credentials: true
  })
)

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieParser())

app.use('/verification', PasswordRoutes)

app.listen(8000, () => {
  console.log('express server on port 8000')
})
