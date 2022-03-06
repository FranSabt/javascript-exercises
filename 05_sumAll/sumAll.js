const sumAll = function(a, b) {
    let result = 0;
    if (a < 0 || b == isNaN){
        return 'ERROR'
    }
    else {
        if (a > b){
            [a,b] = [b, a];
        }
        for (let i = a; i <= b; i++){
            result = result + i; 
        }
        console.log(result)
        console.log(a + "  " + b);
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
