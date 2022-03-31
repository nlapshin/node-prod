const express = require('express')
const app = express()

const PORT = process.env.PORT || 4000

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`)
})
