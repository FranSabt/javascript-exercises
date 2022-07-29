const palindromes = (word) => {
  word = word.toUpperCase().replace(/[^a-z]/gi, '')
  console.log(word);
  for(let i = 0; i < word.length; i++){
    if (word[i] !== word[(word.length - 1) - i]){
      return false
    }
  }
  return true
};

// Do not edit below this line
module.exports = palindromes;
