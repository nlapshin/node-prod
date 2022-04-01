const express = require('express')
const Redis = require('ioredis')

const app = express()
const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379
});

;(async () => {
  const ID = process.env.HOSTNAME
  const PORT = process.env.PORT || 4000

  console.log(ID)

  redis.set('cache', 'cache')

  app.get('/ping', (req, res) => {
    res.send('pong')
  })

  app.get('/cache', (req, res) => {
    res.send(redis.get('cache'))
  })

  app.get('/id', (req, res) => {
    res.send(`Container id ${ID}`)
  })

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`)
  })


})()
