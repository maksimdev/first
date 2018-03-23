const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.get('/api/one', (req, res) => {
  res.send({ express: 'GET ALL SERVICES ONE!' });
});

app.get('/api/two', (req, res) => {
  res.send({ express: 'GET ALL SERVICES TWO!!' });
});

app.get('/api/three', (req, res) => {
  res.send({ express: 'GET ALL SERVICES THREE!!!' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
