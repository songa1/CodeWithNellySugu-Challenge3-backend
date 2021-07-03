const axios = require('axios');

const getAlbums = (req, res) => {
    const id = req.params.id
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then(response => res.status(200).json({data: response.data}))
    .catch(err => console.log(err.message))
}

module.exports = getAlbums;