const express = require('express')
const Redis = require('ioredis')

const app = express()
const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379
});

const PORT = process.env.PORT || 4000

redis.set('cache', 'cache')

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/cache', (req, res) => {
  res.send(redis.get('cache'))
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`)
})
