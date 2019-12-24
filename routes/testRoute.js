const express = require('express');
const router = express.Router();
const db = require('../config/database');
const TestTable = require('../models/Test_table');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get('/', (req, res) => {
  TestTable.findAll()
    .then(tests => res.send(JSON.stringify(tests)))
    .catch(err => console.log(err));
});

module.exports = router;