import express from 'express'
import { verify } from '../modules/password.module'
const PasswordRoutes = express.Router()

/**
 * For password verification
 * */
PasswordRoutes.post('/', async (req, res) => {
  return await verify(req.body.password, req.body.UUID)
})

export default PasswordRoutes
