var getResult = function(x) { return x.val; };

var Max = function(val) { return new _Max(val) }

var _Max = function(val) {
  this.val = val;
};

_Max.prototype.empty = function() { return Max(Number.MIN_VALUE); };

_Max.prototype.concat = function(s2) { return Max(this.val > s2.val ? this.val : s2.val); };

_Max.prototype.inspect = function(f) {
  return 'Max('+inspect(this.val)+')';
};

var Min = function(val) { return new _Min(val) }
var _Min = function(val) {
  this.val = val;
};


_Min.prototype.empty = function() { return Min(Number.MAX_VALUE); };

_Min.prototype.concat = function(s2) { return Min(this.val < s2.val ? this.val : s2.val); };

_Min.prototype.inspect = function(f) {
  return 'Min('+inspect(this.val)+')';
};

var Sum = function(val) { return new _Sum(val) }
var _Sum = function(val) {
  this.val = val;
};

_Sum.prototype.empty = function() { return Sum(0); };

_Sum.prototype.concat = function(s2) { return Sum(this.val + s2.val); };

_Sum.prototype.inspect = function(f) {
  return 'Sum('+inspect(this.val)+')';
};


var Product = function(val) { return new _Product(val) }
var _Product = function(val) {
  this.val = val;
};

_Product.prototype.empty = function() { return Product(1); };

_Product.prototype.concat = function(s2) { return Product(this.val * s2.val); };

_Product.prototype.inspect = function(f) {
  return 'Product('+inspect(this.val)+')';
};


var Any = function(val) { return new _Any(val) }
var _Any = function(val) {
  this.val = val;
};

_Any.prototype.empty = function() { return Any(false); };

_Any.prototype.concat = function(s2) { return Any(this.val || s2.val); };

_Any.prototype.inspect = function(f) {
  return 'Any('+inspect(this.val)+')';
};

var All = function(val) { return new _All(val) }
var _All = function(val) {
  this.val = val;
};

_All.prototype.empty = function() { return All(true); };

_All.prototype.concat = function(s2) { return All(this.val && s2.val); };

_All.prototype.inspect = function(f) {
  return 'All('+inspect(this.val)+')';
};


module.exports = {Max: Max, Min: Min, Sum: Sum, Product: Product, Any: Any, All: All, getResult: getResult}
