// add whatever parameters you deem necessary
function separatePositive(arr) {

  let left = 0;
  let right = arr.length - 1;


  while(left < right){
    let leftVal = arr[left];
    let rightVal = arr[right];

    if(leftVal < 0 && rightVal > 0){
      arr[left] = rightVal;
      arr[right] = leftVal;
      left++;
      right--;
    } else if(leftVal > 0 && rightVal > 0){
      left++;
    } else if(leftVal < 0 && rightVal < 0){
      right--;
    } else if(leftVal > 0 && rightVal < 0){
      left++;
      right--;
    }
  }
return arr;
}

separatePositive([2, -1, -3, 6, -8, 10]) // [2, 10, 6, -3, -1, -8]
separatePositive([5, 10, -15, 20, 25]) // [5, 10, 25, 20, -15]
separatePositive([-5, 5]) // [5, -5]
separatePositive([1, 2, 3]) // [1, 2, 3]

