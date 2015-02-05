var E = require('./monoid_exercises');
var assert = require("chai").assert
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('fantasy-identities');
var Either = require('data.either');
var _ = require('ramda');
var Left = Either.Left;
var Right = Either.Right;

describe("Monoid Answers", function(){

  it('Exercise 1', function(){
    assert.equal(6, E.ex1([1, 2, 3]));
  });

  it('Exercise 2', function(){
    assert.equal(12, E.ex2([2, 2, 3]));
  });

  it('Exercise 3', function(){
    assert.equal(32, E.ex3([12, 32, 3]));
  });

  it('Exercise 4', function(){
    assert.equal("Bill Jefferson Clinton", E.ex4(E.user));
  });

  it('Bonus', function(){
    assert.deepEqual(E.Tuple("abcdef", [1, 2, 3, 4, 5, 6]), E.bonus);
  });

});
