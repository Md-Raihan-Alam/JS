function numPrimorial(n){
  let total=1;
  let selectedPrimeNumber=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97];
  for(let i=0;i<n;i++){
    total=total*selectedPrimeNumber[i];
  }
  return total;
}
/*
another solution
function isPrime(num) {
  if(n<=1) return false;
    for(let i=2;i*i<=n;i++){
        if(n%i==0) return false;
    }
    return true;
}

function numPrimorial(n){
  let arr = []
  let i = 2
  while(arr.length < n){
    if(isPrime(i)){
      arr.push(i)
    }
   i++
  }
  return arr.reduce((a,b) => a * b)
}
*/