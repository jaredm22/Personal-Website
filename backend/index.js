require('dotenv').config()

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const express = require('express')

const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

var clientId = CLIENT_ID;
var clientSecret = CLIENT_SECRET;

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant().then(
  function(data) {
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  function(err) {
    console.log('Something went wrong when retrieving an access token', err);
  }
);

const mongoose = require("mongoose"); // new
const source = process.env.ATLAS_CONNECTION;

mongoose.connect(source, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("DB connected.");
});

const conversationRoutes = require('./src/controllers/conversation.controller')
app.use('/conversations', conversationRoutes);


app.get('/spotify', (req, res) => {
  spotifyApi.getUserPlaylists('1236247390', {limit: 50})
    .then(function(data) {
        res.json(data.body.items);
    })
    .catch((err) => {
        console.log('Something went wrong!', err);
    });
});

app.post("/playlist", (req, res) => {
  spotifyApi.getPlaylistTracks(req.body.id)
    .then((response) => {
        console.log(response.body.items);
        res.json(response.body.items);
    })
    .catch((e) =>  console.log(e));
}) 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Successfully served on port: ${PORT}.`);
})

module.exports = app;
