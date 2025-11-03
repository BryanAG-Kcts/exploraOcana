import { Router } from 'express'
import { registerController } from '../controllers/register.controllers'

export const registerRouter: Router = Router()
registerRouter.get('/register', registerController.getRegister)
