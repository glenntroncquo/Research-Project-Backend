import express, { Request, Response } from 'express'
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from 'typeorm'
import { createDatabase } from 'typeorm-extension'
import dotenv from 'dotenv'
import { UserController } from './controller/user.controller'
import { UserService } from './service/user.service'
import { User } from './entity/User'
import { IRepository } from './models/irepository'

var cors = require('cors')
dotenv.config()

//
;(async () => {
  const connectionOptions: ConnectionOptions = await getConnectionOptions()
  createDatabase({ ifNotExist: true }, connectionOptions)
    .then(() => console.log('Database succesfully created'))
    .then(createConnection)
    .then((connection: Connection) => console.log('connection established'))
    .then(async () => {
      const app = express(),
        port = 3001

      app.get('/', async (req: Request, res: Response) => {
        res.send('hello world')
      })

      app.use(express.json())
      app.use(cors())

      // const userRepo = new IRepository<User>(User)
      const service = new UserService()
      // service.test()
      const userController = new UserController(new UserService())

      // userController.register()
      app.use('/user', userController.router)

      app.listen(port, () =>
        console.log(`Server started on port http://localhost:${port}`)
      )
    })
})()
