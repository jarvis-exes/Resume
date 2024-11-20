Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

var arr = [1, 2, 3];

var arr2 = arr.myMap((value) => value * 2);

console.log(arr2);
