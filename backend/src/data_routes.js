const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

// Simple health route
app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'API healthy ✅' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`)
})