function diagonalDifference(arr) {
    let leftDiagonalSum=0;
    let rightDiagonalSum=0;
    let left=0;
    let right=arr[0].length-1;
    let result;
    for(let i=0;i<arr.length;i++){
        leftDiagonalSum+=arr[i][left];
        left++;
    }
    for(let i=0;i<arr.length;i++){
        rightDiagonalSum+=arr[i][right];
        right--;
    }
    result=leftDiagonalSum-rightDiagonalSum;
    return Math.abs(result);
}
