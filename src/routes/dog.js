'use strict';


const express = require('express');

const router = express.Router();

const {Dogs} = require('../models/index.js');


router.get('/', getDogs);
router.get('/:id', getOneDog);
router.post('/', createDog);
router.put('/:id', updateDog);
router.delete('/:id', deleteDog);

// ROUTE HANDLERS
async function getDogs( request, response ) {
  let data = await Dogs.read(null);
  response.status(200).json(data);
}

async function getOneDog( request, response ) {
  let id = request.params.id;
  let data = await Dogs.read(id);
  response.status(200).json(data);
}

async function createDog( request, response ) {
  let data = request.body;
  let newDog = await Dogs.create(data);
  response.status(201).json(newDog);
}

async function updateDog( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedDog = await Dogs.update(id, data);
  response.status(200).json(updatedDog);
}

async function deleteDog( request, response ) {
  let id = request.params.id;
  let deletedDog = await Dogs.delete(id);
  if ( typeof deletedDog === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;