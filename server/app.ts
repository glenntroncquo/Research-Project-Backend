import express, { NextFunction, Request, Response } from 'express'

const app = express(),
  port = 3001

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World')
})

app.listen(port, () =>
  console.log(`👾\nApp listening on port http://localhost:${port}`)
)
