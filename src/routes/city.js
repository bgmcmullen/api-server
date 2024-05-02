'use strict';


const express = require('express');

const router = express.Router();

const {City} = require('../models/index.js');


router.get('/', getCities);
router.get('/:id', getOneCity);
router.post('/', createCity);
router.put('/:id', updateCity);
router.delete('/:id', deleteCity);

// ROUTE HANDLERS
async function getCities( request, response ) {
  let data = await City.read(null);
  response.status(200).json(data);
}

async function getOneCity( request, response ) {
  let id = request.params.id;
  let data = await City.read(id);
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
  let updatedCity = await City.update(id, data);
  // let updatedCity = await city.update(data);
  response.status(200).json(updatedCity);
}

async function deleteCity( request, response ) {
  let id = request.params.id;
  let deletedCity = await City.delete(id);
  if ( typeof deletedCity === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;