require('dotenv').config()

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const express = require('express')
const serverless = require("serverless-http");

const app = express()

const cors = require('cors')
app.use(cors());
app.use(express.json())

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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Successfully served on port: ${PORT}.`);
})

module.exports = app;
