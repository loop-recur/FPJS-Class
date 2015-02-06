var E = require('./monad_exercises');
var assert = require("chai").assert
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('fantasy-identities');
var Either = require('data.either');
var _ = require('ramda');
var Left = Either.Left;
var Right = Either.Right;

describe("Monad Exercises", function(){

  it('Exercise 1', function(){
    assert.deepEqual(Maybe('Walnut St'), E.ex1(E.user));
  });

  it('Exercise 2', function(){
    assert.match(E.ex2(undefined).runIO(), /monad/);
  });

  it('Exercise 3', function(done){
    E.ex3(13).fork(console.log, function (res) {
      assert.deepEqual([13, 13], res.map(_.get('post_id')));
      done();
    });
  });

  it('Exercise 4', function(){
    assert.deepEqual(Maybe("A"), E.ex4(E.user));
  });

});
