import type { Request, Response } from 'express'

export const registerController = {
  getRegister: (_req: Request, res: Response) => {
    res.json({ message: 'Register route', status: 200 })
  }
}
