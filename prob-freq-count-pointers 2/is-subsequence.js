// add whatever parameters you deem necessary
function isSubsequence(subStr, str) {
  let pointer = 0;

  for(let letter = 0; letter < str.length; letter++){
    if(str[letter] === subStr[pointer]){
      pointer++;
    }
  }
  if(pointer === subStr.length){
    return true;
  }
  return false;
}

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)