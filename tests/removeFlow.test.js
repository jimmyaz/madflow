const mongoose = require('mongoose');
const controller = require('../controllers/flowController');
const httpMocks = require('node-mocks-http');
const app = require('../server');
const supertest = require('supertest');
const Flow = require('../models/flowModel');

require('dotenv').config();
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

beforeAll(
  async () => await mongoose.connect(db).then(() => console.log('DB connection successful!'))
);
afterAll(
  async () => await mongoose.connection.close().then(() => console.log('DB connection is closed!'))
);

test('GET /profile/', async () => {
  await supertest(app).get('/profile/').send({ flow: 'test' }).expect(302);
});

test('GET /flow/removeFlow', async () => {
  const newFlow = await Flow({
    googleId : 'test',
    name     : 'test2',
    elements : [ 1, 2, 3, 4 ],
    major    : 'test'
  });
  await newFlow.save();
  console.log(newFlow);
  //   .then(newFlow => {
  const flowID = newFlow._id.toString();
  //     // console.log('flow id is'+d);
  console.log(flowID);
  //   });
  await supertest(app).get(`/flow/removeFlow?id=${flowID}`).expect(200);
});
