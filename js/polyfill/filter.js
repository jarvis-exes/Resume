Array.prototype.myFilter = function (callback) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

const arr = [1, 2, 3, 4, 5];

const res = arr.myFilter((item) => item > 2);

console.log(res);
