const removeFromArray = function(myArray, element1, element2) {
    let newArray = []
    for(i = 0; i < myArray.length; i++ ){
        if (myArray[i] === element1 || myArray[i] === element2){
            continue;
        }
        else {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
