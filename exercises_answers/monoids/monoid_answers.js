require('lambdajs').expose(global);
require('pointfree-fantasy').expose(global);
var Monoids = require('../../lib/monoids');
var _ = require('ramda');

var Sum = Monoids.Sum;
var Product = Monoids.Product;
var Max = Monoids.Max;
var Min = Monoids.Min;
var Any = Monoids.Any;
var All = Monoids.All;
var getResult = Monoids.getResult;




// Exercise 1
// ==========
// rewrite the ex1 function to use getResult() mconcat() and Sum() instead of sum()

var sum = reduce(_.add, 0);

var ex1 = compose(getResult, mconcat, map(Sum));




// Exercise 2
// ==========
// Similar to the above, get the Product of the list.

var ex2 = compose(getResult, mconcat, map(Product));




// Exercise 3
// ==========
// Similar to the above, get the Max of the list.
var ex3 = compose(getResult, mconcat, map(Max));



// Exercise 4
// ==========
// use the function monoid instance to mconcat the functions below to create a full name string.
var firstName = _.get('first');
var middleName = _.get('middle');
var lastName = _.get('last');
var space = function(){ return ' ' }
var user = { first: "Bill", middle: "Jefferson", last: "Clinton" };

var ex4 = mconcat([firstName, space, middleName, space, lastName]);




// Bonus
// ==========
// For Tuple to be a monoid, it's x,y must also be monoids. Monoids beget monoids.
// Use this information to complete the definition of Tuple's concat fn.

var _Tuple = function (x, y) {
  this.x = x;
  this.y = y;
};
var Tuple = _.curry(function (x, y) { return new _Tuple(x, y); });

_Tuple.prototype.inspect = function () {
  return 'Tuple(' + inspectIt(this.x) + ' ' + inspectIt(this.y) + ')';
};

_Tuple.prototype.empty = function () {
  return Tuple(this.x.empty(), this.y.empty());
};

_Tuple.prototype.concat = function (t2) {
  return Tuple(this.x.concat(t2.x), this.y.concat(t2.y));
};

var bonus = mconcat([Tuple("abc", [1, 2, 3]), Tuple("def", [4, 5, 6])]);

module.exports = {ex1: ex1, ex2: ex2, ex3: ex3, ex4: ex4, bonus: bonus, user: user, Tuple: Tuple}
