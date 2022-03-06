const sumAll = function(a, b) {
    let result = 0;
    if (a < 0 || typeof(b) !== 'number'){ // is NaN was useless because if the 
                                          // varible is a string
                                          // of numbers, it parse to number.
        return 'ERROR'
    }
    else {
        if (a > b){
            [a,b] = [b, a];
        }
        for (let i = a; i <= b; i++){
            result = result + i; 
        }
        console.log(isNaN(b));
        return result;
    }
};

// Do not edit below this line
module.exports = sumAll;
