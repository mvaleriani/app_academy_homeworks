function fizzBuzz(max) {
  var divisible = [];
  for (var i = 0; i < max; i++) {
    if (i%3 === 0 && i%5!==0) {
      divisible.push(i);
    } else if (i%5===0 && i%3!==0) {
      divisible.push(i);
    }
  }
  return divisible;
}

function isPrime(number) {
  if(number >= 2){
    for(var i = 2; i < number ; i++){
      if(number%i === 0){
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
