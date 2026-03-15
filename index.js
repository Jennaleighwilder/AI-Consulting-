const express = require('express');
const path = require('path');

const app = express();
const root = __dirname;

app.use(express.static(root, {
  extensions: ['html']
}));

app.get('/', (_req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

module.exports = app;
