import express from 'express'
import { createReadStream, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PORT = process.env.PORT || 8080
const DIST = join(__dirname, 'dist')

const app = express()

app.get('/.well-known/webfinger', (req, res) => {
  const filePath = join(DIST, '.well-known', 'webfinger')
  res.setHeader('Content-Type', 'application/jrd+json')
  createReadStream(filePath).pipe(res)
})

app.use(express.static(DIST))

app.get('*', (req, res) => {
  res.sendFile(join(DIST, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
