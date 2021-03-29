// add whatever parameters you deem necessary & write doc comment
function canConstructWord(word, letters) {
  //first create freq count of letters
  //loop over word, look up letter in obj and if count is above 0
  //then subtract one from that count, else return false
  //if loop reaches the end then return true  

  let letterCount = {};
  for(letter of letters){
    if(letter in letterCount){
      letterCount[letter] += 1;
    } else {
      letterCount[letter] = 1;
    }
  }

  for(let letter of word){
    if(letter in letterCount && letterCount[letter] > 0){
      letterCount[letter] -= 1;
    } else {
      return false;
    }
  }

  return true;

}

canConstructWord('aa', 'abc')          
canConstructWord('abc', 'dcba')         
canConstructWord('aabbcc', 'bcabcaddff')