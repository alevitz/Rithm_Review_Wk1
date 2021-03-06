// add whatever parameters you deem necessary
function countPairs(numArr, num) {
  let numObj = {};
  let count = 0;

  for(let num of numArr){
    numObj[num] = true;
  }

  for(let key in numObj){
    if(numObj[num - parseInt(key)] && num - parseInt(key) !== parseInt(key)){
      count++;
    }
  }
  return count / 2;
}

countPairs([3,1,5,4,2], 6) // 2 (1,5 and 2,4)
countPairs([10,4,8,2,6,0], 10) // 3 (2,8, 4,6, 10,0)
countPairs([4,6,2,7], 10) // 1 (4,6)
countPairs([1,2,3,4,5], 10) // 0
countPairs([1,2,3,4,5], -3) // 0
countPairs([0,-4],-4) // 1
countPairs([1,2,3,0,-1,-2],0) // 2
