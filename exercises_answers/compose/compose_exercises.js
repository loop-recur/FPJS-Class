require('lambdajs').expose(global);
require('pointfree-fantasy').expose(this);
var _ = require('ramda');
var accounting = require('accounting');
  
// Example Data
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.get() is curried.
var isLastInStock = _.compose(_.get('in_stock'), _.last)

// Exercise 2:
// ============
// use _.compose(), _.get() and _.head() to retrieve the name of the first car
var nameOfFirstCar = _.compose(_.get('name'), _.head)


// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition
//+ _average :: [Number] -> Number
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- leave be

//+ averageDollarValue :: [Car] -> Number
var averageDollarValue = _.compose(_average, map(_.get('dollar_value')))


// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

var _underscore = replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

//+ sanitizeNames :: [Car] -> String
var sanitizeNames = _.map(_.compose(_underscore, toLowerCase, _.get('name')))


// Bonus 1:
// ============
// Refactor availablePrices with compose.

//+ availablePrices :: [Car] -> String
var formatPrice = _.compose(accounting.formatMoney, _.get('dollar_value'))
var availablePrices = _.compose(join(', '), map(formatPrice), _.filter(_.get('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you'll probably need _.flip()

//+ fastestCar :: [Car] -> String
var append = _.flip(_.concat);
var fastestCar = _.compose(append(' is the fastest'),
                           _.get('name'),
                           _.last,
                           _.sortBy(_.get('horsepower')))

module.exports = { CARS: CARS,
                   isLastInStock: isLastInStock,
                   nameOfFirstCar: nameOfFirstCar,
                   fastestCar: fastestCar,
                   averageDollarValue: averageDollarValue,
                   availablePrices: availablePrices,
                   sanitizeNames: sanitizeNames
                 } 
