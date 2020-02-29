const Passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bCrypt = require('bcrypt-nodejs');

Passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async(req, email, password, done) => {
  const generateHash = (pword) => {
    return bCrypt.hashSync(pword, bCrypt.genSaltSync(8), null);
  }

    try {
    const user = await User.findOne({
      where: { email: email }
    });

    if (user) {
      return done(null, false, { message: 'Email is already in use.' });
    } else {
      const userPassword = generateHash(password);

      const newUser = await User.create({
        email: email,
        password: userPassword
      });

      if (!newUser) {
        return done(null, false);
      } else {
        return done(null, user);
      }
    }
  } catch (err) {
    return done(err)
  }
}))

Passport.serializeUser((user, done) => {
  done(null, user.id);
});

Passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({ where: { id: id }});
  try {
    if (user) {
      return done(null, user);
    }
  } catch (err) {
    console.log(err);
  }
})