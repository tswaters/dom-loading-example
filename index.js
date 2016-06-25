
'use strict'

const express = require('express')

const app = express()

app.get('/', (req, res) => res.sendFile(require.resolve('./assets/index.html')))

app.get('/slow/:timeout/:type', (req, res) => {
  let path = null
  const type = req.params.type
  switch (type) {
    case 'script': path = './assets/script.js'; break
    case 'style': path = './assets/style.css'; break
    case 'image': path = './assets/image.png'; break
    case 'data': path = './assets/data.json'; break
    default: return res.status(500).end()
  }
  setTimeout(() => res.sendFile(require.resolve(path)), req.params.timeout)
})

app.listen(3000, () => console.log('listening on 3000'))
