var candidates = require('./candidates.json');
var users = require('./users.json');

module.exports = function () {
  return {
    candidates,
    users
  };
};
