const fibonacci = (num) => {
  if(num < 1){
    return 'OOPS'
  }
  let i = 1
  let acc = 0
  let oldN= 0
  let count= 0
  while(count < num){
    oldN = acc
    acc += i
    i = oldN
    count++
  }
  return acc
};


// Do not edit below this line
module.exports = fibonacci;
