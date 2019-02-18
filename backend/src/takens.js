const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('./config.taken');

function createTaken(user){
    const payload = {
      sub: user.id,
      iat: moment().unix(),
      exp: moment().add(30, 'days').unix()
  
    }
  
    return jwt.encode(payload, config.TOKEN_SECRET)
  }

  module.exports = createTaken;