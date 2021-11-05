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

dotenv.config()
//
;(async () => {
  const connectionOptions: ConnectionOptions = await getConnectionOptions()
  createDatabase({ ifNotExist: true }, connectionOptions)
    .then(() => console.log('Database succesfully created'))
    .then(createConnection)
    .then((connection: Connection) => console.log('connection established'))
    .then(async () => {
      console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS)
      const app = express(),
        port = 3001

      app.get('/', async (req: Request, res: Response) => {
        res.send('hello world')
      })

      app.use(express.json())

      const userController = new UserController()
      app.get('/firebase', userController.createUser)

      app.listen(port, () =>
        console.log(`Server started on port http://localhost:${port}`)
      )
    })
})()
