Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? callback(acc, this[i]) : this[i];
  }

  return acc;
};

const arr = [1, 2, 3, 4, 5];

const res = arr.myReduce((acc, curr) => acc + curr);

console.log(res);
