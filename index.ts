import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from StatStake API 👋' })
})

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`)
})
