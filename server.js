import express from 'express'
import env from 'dotenv'
import taskRoutes from './routes/index.js'

env.config()

const server = express()
server.use(express.json())

server.use('/api/v1/tasks', taskRoutes)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  //anonymous function, also an arrow function
  console.log(`server starterd on port ${PORT}`)
})
