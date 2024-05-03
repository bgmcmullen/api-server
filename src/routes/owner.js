'use strict';


const express = require('express');

const router = express.Router();

const {Dogs, Owners} = require('../models/index.js');


router.get('/', getOwner);
router.get('/:id', getOneOwner);
router.post('/', createOwner);
router.put('/:id', updateOwner);
router.delete('/:id', deleteOwner);

// ROUTE HANDLERS
async function getOwner( request, response ) {
  let data = await Owners.read(null, {
    include: {
      model: Dogs.model
    }
  });
  response.status(200).json(data);
}

async function getOneOwner( request, response ) {
  let id = request.params.id;
  let data = await Owners.read(id, {
    include: {
      model: Dogs.model
    }
  });
  response.status(200).json(data);
}

async function createOwner( request, response ) {
  let data = request.body;
  let newOwner = await Owners.create(data);
  response.status(201).json(newOwner);
}

async function updateOwner( request, response ) {
  let id = request.params.id;
  let data = request.body;
  let updatedOwner = await Owners.update(id, data);
  response.status(200).json(updatedOwner);
}

async function deleteOwner( request, response ) {
  let id = request.params.id;
  let deletedOwner = await Owners.delete(id);
  if ( typeof deletedOwner === "number" ) {
    response.status(204).send(null);
  } else {
    throw new Error("Error deleting record");
  }
}



module.exports = router;