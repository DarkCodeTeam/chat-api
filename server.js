const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.json());
app.use(express.static('public'));
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);


mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));


io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join room', (room) => {
        socket.join(room);
    });

    socket.on('chat message', (msg) => {
        io.to(msg.room).emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
