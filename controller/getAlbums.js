const axios = require('axios');

const getAlbums = (req, res) => {
    axios.get('')
    .then(response => res.status(200).json({data: respone.data}))
    .catch(err => console.log(err.message))
}

module.exports = getAlbums;