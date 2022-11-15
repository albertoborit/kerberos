import express from 'express'
import { verify } from '../modules/password.module'
const PasswordRoutes = express.Router()

/**
 * For password verification
 * */
PasswordRoutes.post('/check-password', async (req, res) => {
  res.json(await verify(req.body.password, req.body.UID))
})

export default PasswordRoutes
