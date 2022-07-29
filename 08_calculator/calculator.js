const add = (...arr) => {
  let total = 0
arr.map(num => {
  total += num
})
return total
};

const subtract = (...arr) => {
  let total = 0
arr.map(num => {
  total === 0 ? total = num : total -= num
})
return total
};

const sum = (arr) => { //I have some problems with the spread operator
                      //also their use was unnecessary
  return arr.reduce((total, val) => total + val, 0)
};

const multiply = (arr ) => {
  return arr.reduce((total, val) => total * val, 1)
  // if your default value is 0, the result will always be 0
};

const power = (a , b ) => {
	return Math.pow(a,b)
};

const factorial = (n) => {
  if(n === 0){
    return 1
  }
  return n * factorial(n -1)
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
