// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {

  let obj = {};

  for(let i = 0; i < arr1.length; i++){
    if(arr2[i] === undefined){
      obj[arr1[i]] = null;
    } else {
      obj[arr1[i]] = arr2[i];
    }
  }
return obj;
}


twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3]) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4]) // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(['x', 'y', 'z'], [1, 2]) // {'x': 1, 'y': 2, 'z': null}