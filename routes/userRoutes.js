const express = require('express');
const User = require('../models/User');
const sequelize = require('sequelize');
const Passport = require('passport');

const userRouter = express.Router();

userRouter.post('/signup', Passport.authenticate('local-signup'),
  (req,res) => {
    console.log('user/signup post route reached!');
    res.status(200).send('user signed up');
  }
);

module.exports = userRouter;