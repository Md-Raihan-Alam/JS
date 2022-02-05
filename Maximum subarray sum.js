/*
ubarrays are arrays within another array.Subarrays contains contiguous elements whereas subsequences are not.

An Example would make it clear

Consider an array {1,2,3,4}

List of all its subarrays are {},{1},{2},{3},{4},{1,2},{2,3},{3,4},{1,2,3,4}

List of all its subsequences are {},{1},{2},{3},{4},{1,2},{1,3},{1,4},{2,3},{2,4},{3,4},{1,2,3},{1,2,4},{1,3,4},{2,3,4},{1,2,3,4}
 */
/*
Maximum subarray sum
What is the maximum subarray sum problem? Say, you’re given an array of integers, of size n, and you’re asked to find the contiguous sub array with maximum sum, how will you do that? More specifically, if you’re asked to find the sum of such contiguous subarray, how will you approach the problem?

Naive approach
The brute force solution involves finding all possible contiguous sub arrays and finding the sum, to find the maximum possible sum. For this, we need to run two loops, one iterating over the array elements to fix the leftmost element of the subarray, and the other loop keeps iterating on the right of this chosen element to fix the rightmost element of the subarray.

What is the time complexity of this approach? Since we’re running two for loops, it’ll take O(n²) time complexity.

Can this be improved? Can this be solved in a single pass?

Kadane’s algorithm
1.Iterate over the array and keep track of two variables max_so_far and max_ending_here.
2.Initially, both max_so_far and max_ending_here are initialized to zero.
3.At index i, max_ending_here computes the subarray with largest sum ending at i, and, max_so_far computes the subarray with the largest sum anywhere in A[0..i].
4.Keep updating the two variables at every iteration, and at the end of the pass, max_so_far holds the maximum subarray sum.
The pseudo code for implementing the above approach :

     Initialize : 
     max_so_far = 0 
     max_ending_here = 0 
     Loop over the elements of the array : 
     At index i, of the array 
      max_ending_here = max_ending_here+arr[i] 
      if(max_ending_here < 0) 
        max_ending_here = 0 
      if(max_ending_here > max_so_far) 
        max_so_far = max_ending_here 
     return max_so_far

*/
var maxSequence = function(arr){
  if(arr.length==0){
    return 0;
  }
   let sum=arr[0];
    for(let i=1;i<arr.length;i++){
        arr[i]=Math.max(arr[i],arr[i]+arr[i-1]);
        sum=Math.max(sum,arr[i]);
    }
  if(sum<0){
    return 0;
  }
    return sum;
}
// another solution
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}