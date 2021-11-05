import express from 'express'

const app = express(),
  port = 3001

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () =>
  console.log(`👾\nServer started on port http://localhost:${port}`)
)
