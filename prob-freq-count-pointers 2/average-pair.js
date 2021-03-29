// add whatever parameters you deem necessary
function averagePair(nums, target) {

//since arr is sorted, we can use two pointers on both ends
//and keep moving them towards eachother depending on if the current 
//calculation is above or below the average.  Stop looping and return
//false once they are at the same index.  

let left = 0;
let right = nums.length-1;

while(left < right){
  let avg = (nums[left] + nums[right]) / 2;

  if(avg === target){
    return true;
  } else if(avg < target){
    left++;
  } else {
    right--;
  }
}

return false;

}

averagePair([1, 2, 3], 2.5)                     // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)  // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1)           // false
averagePair([], 4)                              // false