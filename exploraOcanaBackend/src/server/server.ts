import express, { type Express } from 'express'
import { registerRouter } from '../routes/register.routes'

export class Server {
  app: Express

  constructor() {
    this.app = express()
  }

  middlewares() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(registerRouter)
  }

  start() {
    this.middlewares()
    this.routes()
    this.app.listen(3000, () => {
      console.log('Example app listening at http://localhost:3000')
    })
  }
}
