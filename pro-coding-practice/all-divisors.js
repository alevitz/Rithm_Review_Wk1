function allDivisors(num) {
if(num <= 0 || num !== Math.ceil(num)){
  return "Please provide a positive, whole number.";
}

let numArr = [];

for(let increment = 1; increment <= num; increment++){
if(num % increment === 0){
  numArr.push(increment);
}
}
return numArr;
}