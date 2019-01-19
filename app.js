'use strict';

const express = require('express');
const path = require('path');
const app = express();
const buildDir = 'portfolio/build';

app.use(express.static(path.join(__dirname, buildDir)));

app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, buildDir, 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
