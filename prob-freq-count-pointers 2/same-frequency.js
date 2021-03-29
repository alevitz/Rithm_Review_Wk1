// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  if(num1.length !== num2.length)return false;
  
  let obj1 = {};
  let obj2 = {};

  for(let num of num1){
    obj1[num] = (obj1[num] || 0) + 1;
  }

  for(let num of num2){
    obj2[num] = (obj2[num] || 0) + 1;    
  }

for(let key in obj1){
  if(obj1[key] !== obj2[key])return false;
}

return true;

}

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false