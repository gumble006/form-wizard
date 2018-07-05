// server.js
const path = require('path');
const jsonServer = require('json-server');
const express = require('express');
const seedData = require('./db.js');

const server = jsonServer.create();
const router = jsonServer.router(seedData());
const middlewares = jsonServer.defaults({
  static: 'assets',
});

server.use(middlewares);

server.get('/api/validateUser', (req, res) => {
  const found = router.db.get('users')
    .filter(req.query)
    .size()
    .value();
  res.jsonp({ available: found === 0 });
});

server.use('/api', router);
server.use(express.static(path.join(__dirname, '/../build')));

server.listen(process.env.PORT || 3000, () => {
  console.log('JSON Server is running');
});
