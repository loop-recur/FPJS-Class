require('lambdajs').expose(global);
require('pointfree-fantasy').expose(global);
var Maybe = require('pointfree-fantasy/instances/maybe');
var IO = require('../../lib/io');
var Future = require('data.future');
var _ = require('ramda');
IO.extendFn();

// Exercise 1
// ==========
// Use safeGet and map/mjoin or chain to safetly get the street name when given a user

var safeGet = _.curry(function (x, o) { return Maybe(o[x]); });
var user = {
  id: 2,
  name: "albert",
  address: {
    street: {
      number: 22,
      name: 'Walnut St'
    }
  }
};

var ex1 = undefined


// Exercise 2
// ==========
// Use monads to get the dir, then purely log it.

var getFile = function() { return __filename; }.toIO();

var pureLog = function(x) {
  console.log(x);
  return x;
}.toIO();

var ex2 = undefined



// Exercise 3
// ==========
// Use monads to first get the Post with getPost(), then pass it's id in to getComments().

var ex3 = undefined


// Exercise 4
// ==========
// Use safeGet to retrieve the user's name, then upperCase it, then safeGet the first char: safeGet(0). The signature should be: User -> Maybe(String)
var ex4 = undefined



// HELPERS
// =====================

function getPost(i) {
  return new Future(function (rej, res) {
    setTimeout(function () {
      res({
        id: i,
        title: 'Love them futures'
      });
    }, 300);
  });
}

function getComments(i) {
  return new Future(function (rej, res) {
    setTimeout(function () {
      res([{post_id: i, body: "This class should be illegal"}, {post_id: i, body:"Monads are like space burritos"}]);
    }, 300);
  });
}

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, user: user}
