import express from 'express'
import { verify, invalidTry } from '../modules/password.module'
const SecurityRoutes = express.Router()

/**
 * For password comparison from user UID on database
 * */
SecurityRoutes.post('/check-password', async (req, res) => {
  res.json(await verify(req.body.password, req.body.UID))
})

/**
  * Add invalid try counter to certain UID
  * */
SecurityRoutes.post('/invalid-try', async (req, res) => {
  res.json(await invalidTry(req.body.UID))
})

export default SecurityRoutes
