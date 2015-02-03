require('lambdajs').expose(global);
require('pointfree-fantasy').expose(global);
var _ = require('ramda')


// Exercise 1
// split :: String -> String -> [String]
//==============

//+ words :: String -> [String]
var words = split(' ');

// Exercise 1a
// split :: String -> String -> [String]
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.
var sentences = map(words);


// Exercise 2
// match :: Regex -> String -> Bool
//==============

//+ filterQs :: [String] -> [String]
var filterQs = filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

//+ _keepHighest :: Number -> Number -> Number
var _keepHighest = function(x,y){ return x >= y ? x : y; }; // <- leave be

//+ max :: [Number] -> Number
var max = reduce(_keepHighest, 0)


// Bonus 1:
// ============
// wrap array's slice to be funcitonal and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry(function(start, end, xs){ return xs.slice(start, end); })


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. make it's curried
var take = slice(0)


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 } 
