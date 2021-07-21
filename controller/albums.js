const axios = require("axios");


/**
 * \-------------------------------------------------
 * Retrieve Album photos.
 *
 * @param {req} request.
 * @param {res} response.
 * @return {Array} result array.
 * /-------------------------------------------------
 */
const getAlBumPhotos = (req, res) => {
  let albumId = req.params.id;
  let url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
  axios
    .get(url)
    .then((response) => {
      const photosList = response.data.map((i) => ({
        id: i.id,
        title: i.title,
        thumbnailUrl: i.thumbnailUrl,
      }));
      res.status(200).json(photosList);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports = {
  getAlBumPhotos,
};
