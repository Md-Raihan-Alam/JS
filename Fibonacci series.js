//solution with loop
function fibonacci(result,len){
    let num1=result[0];
    let num2=result[1];
    let next;
    let count=2;
    while(count<len){
        next=num1+num2;
        num1=num2;
        num2=next;
        result.push(next);
        count++;
    }
    return result;
}
//solution with recursion
function fibonacci2(result,len){
    if(result.length>=len){
        return result;
    }
    result.push(result[result.length-2]+result[result.length-1]);
    return fibonacci2(result,len);
}