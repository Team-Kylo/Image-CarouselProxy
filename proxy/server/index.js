const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
const axios = require('axios');
const port = process.env.PROXY_PORT || 3000;

app.use(express.static('./public'));


app.get('/carousel/:id', (req, res, next) => {
  const id = req.params.id;
  axios.get(`http://localhost:5001/carousel/${id}`)
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch(err => {
      console.log('error getting images', err);
    })
});

app.get('/details/:id', (req, res, next) => {
  const id = req.params.id;
  axios.get(`http://localhost:3002/details/${id}`)
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch(err => {
      console.log('error getting details', err);
    })
});

app.get('/reviews/:id', (req, res, next) => {
  const id = req.params.id;
  axios.get(`http://localhost:3003/reviews/${id}`)
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch(err => {
      console.log('error getting reviews', err);
    })
});

app.get('/additional/:id', (req, res, next) => {
  const id = req.params.id;
  axios.get(`http://localhost:3004/additional/${id}`)
    .then((results) => {
      res.status(200).json(results.data);
    })
    .catch(err => {
      console.log('error getting additional items', err);
    })
});


app.listen(port, () => {
  console.log(`listening on port ${port}`)
});