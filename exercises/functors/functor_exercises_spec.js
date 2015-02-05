var E = require('./functor_exercises');
var assert = require("chai").assert
var Maybe = require('pointfree-fantasy/instances/maybe');
var Identity = require('fantasy-identities');
var Either = require('data.either');
var Left = Either.Left;
var Right = Either.Right;

describe("Functor Exercises", function(){

  it('Exercise 1', function(){
    assert.deepEqual(Identity(3), E.ex1(Identity(2)));
  });

  it('Exercise 2', function(){
    var xs = Identity(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
    assert.deepEqual(Identity('do'), E.ex2(xs));
  });

  it('Exercise 3', function(){
    var user = { id: 2, name: "Albert" };
    assert.deepEqual(Maybe('A'), E.ex3(user));
  });

  it('Exercise 4', function(){
    assert.deepEqual(Maybe(4), E.ex4("4"));
  });

  it('Exercise 5', function(done){
    E.ex5(13).fork(console.log, function(res){
      assert.deepEqual('LOVE THEM FUTURES', res)
      done();
    })
  });

  it('Exercise 6', function(){
    assert.deepEqual(Left('Your account is not active'), E.ex6({active: false, name: 'Gary'}))
    assert.deepEqual(Right('Welcome Theresa'), E.ex6({active: true, name: 'Theresa'}))
  });

  it('Exercise 7', function(){
    assert.deepEqual(Right("fpguy99"), E.ex7("fpguy99"))
    assert.deepEqual(Left("You need > 3"), E.ex7("..."))
  });

  it('Exercise 8', function(){
    assert.deepEqual(Right("fpguy99"), E.ex8("fpguy99"))
    assert.deepEqual(Left("You need > 3"), E.ex8("duh"))
  });
});
