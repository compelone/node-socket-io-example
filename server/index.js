const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const bookData = require('./data.js');

const PORT = 3001;

io.on('connection', (socket) => {
    console.log('User connected');

    setTimeout(() => {
        bookData.forEach((d) => {
            socket.emit('message', d.name);
        });
    }, 2000);

    socket.on('add book', (message) => {
        console.log(message);
        bookData.push(message);
        io.emit('message', message.name);
    });
});

http.listen(PORT, () => {
    console.log(`Listening on *:${PORT}`);
});

