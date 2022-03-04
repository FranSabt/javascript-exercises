const reverseString = function(string) {
    let reverse = "";
    for (i = string.length - 1; i >= 0; i--){ //se me olvido el carater de cierre del string
    reverse += string[i];               //ahí estaba mi problema
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
