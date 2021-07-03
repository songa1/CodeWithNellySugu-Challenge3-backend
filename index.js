const express = require('express')
const getAlbums = require('./controller/getAlbums');

const app = express();
const port = 8000 || process.env.PORT

app.listen(port, () => {
    console.log("Server running on port 5000")
})

app.get('/api/albums/:id', getAlbums)