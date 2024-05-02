'use strict';


const express = require('express');

const router = express.Router();

const {City} = require('../models/index.js');


router.get('/cities', getCities);
router.get('/cities/:id', getOneCity);
router.post('/cities', createCity);
router.put('/cities/:id', updateCity);
router.delete('/cities/:id', deleteCity);

// ROUTE HANDLERS
async function getCities( request, response ) {
  let data = await City.findAll();
  response.status(200).json(data);
}

async function getOneCity( request, response ) {
  let id = request.params.id;
  let data = await City.findOne({where: {id:id}});
  response.status(200).json(data);
}

async function createCity( request, response ) {
  let data = request.body;
  let newCity = await City.create(data);
  response.status(201).json(newCity);
}

async function updateCity( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let city = await City.findOne({where: {id:id}});
  let updatedCity = await city.update(data);
  response.status(200).json(updatedCity);
}

async function deleteCity( request, response ) {
  let id = request.params.id;
  let deletedCity = await City.destroy( {where: {id:id}} );
  if ( typeof deletedCity === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;