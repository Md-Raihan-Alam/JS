let finalArray=[];
function printSubsequences(arr,n)
{
    let array=[];
    //Number of subsequences is 2*n-1
    let opSize=parseInt(Math.pow(2,n),10);
    //Run from counter 000..1 to 111..1
    for(let counter=1;counter<opSize;counter++){
        for(let j=0;j<n;j++){
            //check if jth bit in the counter is set
            //if set then print jth element from arr[]
            if((counter&(1<<j))!=0)
            // document.write(arr[j]+" ");
            array.push(arr[j]);
        }
        finalArray.push(array);
        array=[];
    }
    console.log(finalArray);
}
let arr=[1,2,3,4];
let n=arr.length;
document.write('All Non-empty Subsequences <br/>');
printSubsequences(arr,n);