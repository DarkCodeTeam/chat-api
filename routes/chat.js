const express = require('express');
const Message = require('../models/Message');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.post('/message', async (req, res) => {
    const { username, content, room } = req.body;
    const message = new Message({ username, content, room });
    await message.save();
    res.status(201).json(message);
});


router.get('/messages/:room', async (req, res) => {
    const messages = await Message.find({ room });
    res.json(messages);
});


router.post('/upload', upload.single('file'), (req, res) => {
    res.json({ filePath: req.file.path });
});

module.exports = router;
