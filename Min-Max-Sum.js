function miniMaxSum(arr) {
    let sumArrays=[];
    let total=0;
    let maxSum=0;
    let minSum=0;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(j===i) continue;
            else total+=arr[j];
        }
        sumArrays.push(total);
        total=0;
    }
        for(let i=0;i<sumArrays.length;i++){
            if(sumArrays[i]>=maxSum) maxSum=sumArrays[i];
        }
        minSum=maxSum;
        for(let i=0;i<sumArrays.length;i++){
            if(sumArrays[i]<=minSum) minSum=sumArrays[i];
        }
        console.log(String(minSum)+" "+String(maxSum));
}