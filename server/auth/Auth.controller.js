var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var log = require('../helpers/log');

var UserRepository = require('../user/User.repository');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../config'); // get config file

router.post('/login', function (req, res) {
  log.info('REST to login user : ', req.body);

  var username = req.body.username;
  var password = req.body.password;

  // Find user in repo
  const user = UserRepository.findOneByUsername(username);
  if (!user) {
    return res.status(404).send('No user found');
  }

  // check if the password is valid
  var passwordIsValid = bcrypt.compareSync(password, user.password);

  // if password is valid
  if (!passwordIsValid) { return res.status(401).send({ auth: false, token: null }); }

  // create a token
  var token = jwt.sign({ id: user.id }, config.secret, {
    expiresIn: 3600 // TTL 1 hour
  });

  // return the information including token as JSON
  res.status(200).send({ auth: true, token: token });
});

router.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

module.exports = router;