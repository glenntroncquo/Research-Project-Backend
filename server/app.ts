import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'

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

// ;(async () => {

// })()
