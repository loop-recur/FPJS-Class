var E = require('./applicative_exercises');
var assert = require("chai").assert
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('fantasy-identities');
var Either = require('data.either');
var _ = require('ramda');
var Left = Either.Left;
var Right = Either.Right;

describe("Applicative Exercises", function(){

  it('Exercise 1', function(){
    assert.deepEqual(Maybe(5), E.ex1(2, 3));
    assert.deepEqual(Maybe(null), E.ex1(null, 3));
  });

  it('Exercise 2', function(){
    assert.deepEqual(Maybe(5), E.ex2(Maybe(2), Maybe(3)));
    assert.deepEqual(Maybe(null), E.ex2(Maybe(null), Maybe(3)));
  });

  it('Exercise 3', function(done){
    E.ex3.fork(console.log, function (html) {
      assert.equal("<div>Love them futures</div><li>This class should be illegal</li><li>Monads are like space burritos</li>", html);
      done();
    });
  });

  it('Exercise 4', function(){
    assert.equal("toby vs sally", E.ex4.runIO());
  });

});
