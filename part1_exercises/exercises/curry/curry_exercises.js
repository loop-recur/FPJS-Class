require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = function(str) {
  return _.split(' ', str);
};

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = undefined;


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = function(xs) {
  return _.filter(function(x){ return _.match(/q/i, x);  }, xs);
};


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(xs) {
  return _.reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, 0, xs);
};

  
// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like fn's in ramda
// //[1,2,3].slice(0, 2)
var slice = undefined;


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = undefined;


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
