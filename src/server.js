import express from 'express'
import env from 'dotenv'
import taskRoutes from './routes/index.js'

env.config()

const server = express()
server.use(express.json())

server.use('/', taskRoutes)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log(`server starterd on port ${PORT}`)
})
