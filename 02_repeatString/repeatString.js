const repeatString = function(x, num) {
    let y = ``;
    if (num < 0){
        return 'ERROR';
    }
    else{
        for ( let i = 0 ; i < num; i++){
            y = y + x;
        }
    }
    return y;
};

// Do not edit below this line
module.exports = repeatString;
