function checkPrime(n){
    n++;
    let isPrime=1;
    for(let i=2;i*i<=n;i++){
        if(n%i===0) {
            isPrime=0;
        }
    }
    if(n<2) return checkPrime(n);
    else if(isPrime===1) return n;
    else return checkPrime(n);
}
function nextPrime(n){
    let nextNumber=checkPrime(n);
    return nextNumber;
}