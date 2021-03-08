// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');
const server = express();
server.use(express.json());

//GET /api/users
server.get('/api/users', (req, res) => {
    User.find()
      .then(users => {
          res.status(200).json(users);
      })
      .catch(err => {
          res.status(500).json({ message: err.message });
      });
});

//GET /api/users/:id
server.get('/api/users/:id', (req, res) => {
    const id = req.params.id
    User.findById(id)
      .then(user => {
          if(!user) {
              res.status(404).json({ message: `User with id ${id} not found`} );
          } else {
              res.json(user)
          }
      })
      .catch(err => {
          res.status(500).json({ message: err.message })
      });
});

server.use('*', (req, res) => {
    res.status(400).json({ message: 'resource not found in this server'});
});

module.exports = server; // EXPORT YOUR SERVER instead of {}
