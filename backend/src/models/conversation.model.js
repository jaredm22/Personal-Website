// user model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const conversationSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String },
    messages: { type: Array, required: true, default: [] },
    numMessages: { type: Number, required: true, default: 0 },
    lastSentMessageIndex: { type: Number }
});

const Conversation = mongoose.model('Conversation', conversationSchema)
module.exports = Conversation;