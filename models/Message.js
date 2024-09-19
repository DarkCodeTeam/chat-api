const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: { type: String, required: true },
    content: { type: String, required: true },
    room: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', messageSchema);
