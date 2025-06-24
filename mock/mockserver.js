const express = require('express');
const cors = require('cors');

const server = express();
const PORT = 9999;

server.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});

server.use(express.static(__dirname));
server.use(cors());

server.get('/games.json', function (req, res) {
    fetch('games.json').then((response) => {res.json(response);})
});

server.get('/game_quiz_question.json', function (req, res) {
    fetch('game_quiz_question.json').then((response) => {res.json(response)});
});