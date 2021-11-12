import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { createDatabase } from 'typeorm-extension'
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from 'typeorm'
;(async () => {
  const connectionOptions: ConnectionOptions = await getConnectionOptions()
  createDatabase({ ifNotExist: true }, connectionOptions)
    .then(() => console.log('Database succesfully created'))
    .then(createConnection)
    .then((connection: Connection) => console.log('Connection established'))
    .then(async () => {
      const app = express(),
        port = 3001

      app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send('Hello World')
      })

      app.use(express.json())
      app.use(cors())

      app.listen(port, () =>
        console.log(`👾\nApp listening on port http://localhost:${port}`)
      )
    })
})()
