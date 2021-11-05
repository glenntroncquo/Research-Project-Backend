import express, { Request, Response } from 'express'
import {
  Connection,
  ConnectionOptions,
  createConnection,
  getConnectionOptions,
} from 'typeorm'
import { createDatabase } from 'typeorm-extension'


;(async () => {
  const connectionOptions: ConnectionOptions = await getConnectionOptions()
  createDatabase({ ifNotExist: true }, connectionOptions)
    .then(() => console.log('Database succesfully created'))
    .then(createConnection)
    .then((connection: Connection) => console.log('connection established'))
    .then(async () => {
      const app = express(),
        port = 3001

      app.get('/', (req: Request, res: Response) => res.send('Hello World'))

      app.listen(port, () =>
        console.log(`Server started on port http://localhost:${port}`)
      )
    })
})()
