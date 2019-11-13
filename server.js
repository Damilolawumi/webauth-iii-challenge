const express = require('express');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

const server = express();

server.use(helmer());
server.use(express.json());


// server.use('/api/auth', authRouter);
// server.use('/api/users', usersRouter);


server.get('/', (req, res) => {
    res.send('yay its alive');
});

module.exports = server