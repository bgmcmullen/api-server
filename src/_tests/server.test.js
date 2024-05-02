'use strict';

require('dotenv').config();
const supertest = require('supertest');
const { app } = require('../server.js');
const exp = require('constants');

const mockRequest = supertest(app);

const {db} = require('../models/index.js');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

describe('API Server' , () => {
  it('shoudl respond with a 404 on an invalid route', async () => {
    let response = await mockRequest.get('/no-thing');
    expect(response.status).toBe(404);
  });

  it('can add a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('bob');
    expect(response.body.breed).toBe("mutated martian dog");
    expect(response.body.age).toBe(9);
  });

  it('can get a list of dog', async () => {
    let response = await mockRequest.get('/dogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('breed');
  });

  it('can get a dog', async () => {
    let response = await mockRequest.get('/dogs/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('breed');
    expect(response.body.name).toBeDefined();
  });

  it('can update a dog', async () => {
    let data = {};
    let response = await mockRequest.put('/dogs/1',data);
    expect(response.status).toBe(200);
  });

  it('can delete a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    let id = response.body.id;

    let deleteResponse = await mockRequest.delete(`/dogs/${id}`);
    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.text).toBe('');
  });

  it('can add a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('bob');
    expect(response.body.breed).toBe("mutated martian dog");
    expect(response.body.age).toBe(9);
  });

  it('can get a list of dog', async () => {
    let response = await mockRequest.get('/dogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('breed');
  });

  it('can get a dog', async () => {
    let response = await mockRequest.get('/dogs/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('breed');
    expect(response.body.name).toBeDefined();
  });

  it('can update a dog', async () => {
    let data = {};
    let response = await mockRequest.put('/dogs/1',data);
    expect(response.status).toBe(200);
  });

  it('can delete a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    let id = response.body.id;

    let deleteResponse = await mockRequest.delete(`/dogs/${id}`);
    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.text).toBe('');
  });

  it('can add a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('bob');
    expect(response.body.breed).toBe("mutated martian dog");
    expect(response.body.age).toBe(9);
  });

  it('can get a list of dog', async () => {
    let response = await mockRequest.get('/dogs');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('breed');
  });

  it('can get a dog', async () => {
    let response = await mockRequest.get('/dogs/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('breed');
    expect(response.body.name).toBeDefined();
  });

  it('can update a dog', async () => {
    let data = {};
    let response = await mockRequest.put('/dogs/1',data);
    expect(response.status).toBe(200);
  });

  it('can delete a dog', async () => {
    let data = {"name":"bob", age: 9, "breed": "mutated martian dog"};
    let response = await (mockRequest.post('/dogs').send(data));
    let id = response.body.id;

    let deleteResponse = await mockRequest.delete(`/dogs/${id}`);
    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.text).toBe('');
  });

  it('can add a city', async () => {
    let data = {"name":"Seattle", "population": 700000};
    let response = await (mockRequest.post('/cities').send(data));
    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe('Seattle');
    expect(response.body.population).toBe(700000);
  });

  it('can get a list of city', async () => {
    let response = await mockRequest.get('/cities');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body[0]).toHaveProperty('population');
  });

  it('can get a city', async () => {
    let response = await mockRequest.get('/cities/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('population');
    expect(response.body.name).toBeDefined();
  });

  it('can update a city', async () => {
    let data = {};
    let response = await mockRequest.put('/cities/1',data);
    expect(response.status).toBe(200);
  });

  it('can delete a city', async () => {
    let data = {"name":"Seattle", "population": 700000};
    let response = await (mockRequest.post('/cities').send(data));
    let id = response.body.id;

    let deleteResponse = await mockRequest.delete(`/cities/${id}`);
    expect(deleteResponse.status).toBe(204);
    expect(deleteResponse.text).toBe('');
  });

})