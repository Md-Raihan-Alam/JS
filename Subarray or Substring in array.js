let arr = [1, 2, 3, 4];
  let finalArray=[];
// Prints all subarrays in arr[0..n-1]
function subArray(n)
{
     let array=[];
    // Pick starting point
    for(let i = 0; i < n; i++)
    {
        // Pick ending point
        for(let j = i; j < n; j++)
        {        
            // Print subarray between current
            // starting and ending points
            for(let k = i; k <= j; k++){
                array.push(arr[k]);
            }     
            finalArray.push(array);
            array=[];
        }
    }
    console.log(finalArray);
}
// Driver code
subArray(arr.length);
