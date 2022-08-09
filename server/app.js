// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());
app.use((req, res, next) => {
  console.log('Body', req.body);
  next();
});

app.get("/artists", (req, res) => {
  let resBody = JSON.stringify(getAllArtists());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.write(resBody);
  res.end();
  return;
});

app.get("/artists/latest", (req, res) => {
  let resBody = JSON.stringify(getLatestArtist());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(resBody);
});

app.get("/artists/latest/albums", (req, res) => {
  let resBody = JSON.stringify(getAlbumsForLatestArtist());
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.end(resBody);
});

app.post('/artists', (req, res) => {
  let resBody = JSON.stringify(addArtist(req.body));
  res.statusCode = 201;
  res.setHeader("Content-Type", "application/json");
  res.write(resBody);
  res.end();
  return;
});




const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
