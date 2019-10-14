const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html')
})

app.post('/api/upload-file', upload.single('avatar'), (req, res) => {
  const f = req.file

  res.json({
    name: f.originalname,
    type: f.mimetype,
    size: f.size
  })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
