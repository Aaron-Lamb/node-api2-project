const express = require('express');
const expressRouter = require('./routers/express-router');
const welcomeRouter = require('./routers/welcome-router');

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());
server.use(welcomeRouter);
server.use(expressRouter);

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})