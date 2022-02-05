function orderWeight(strng) {
    let tempNum=0;
    let tempNumString="";
    let combineSum="";
    let combineSumArray=[];
    let tempNumArray=[];
    let returnArray=[];
    let answer="";
    for(let i of strng){
        if(i===" "){
            tempNumArray.push(tempNumString.trim());
            combineSumArray.push(tempNum);
            combineSum+=String(tempNum);
            combineSum+=i;
            tempNum=0;
            tempNumString="";
        }
        tempNumString+=i;
        tempNum+=Number(i);
    }
    tempNumArray.push(tempNumString.trim());
    combineSumArray.push(tempNum);
   /*let returnSort=*/ sortWeight(tempNumArray,combineSumArray);
   //console.log(returnSort);
    //for(let i=0;i<returnSort.length;i++){
      //  answer+=returnSort[i][0];
        //answer+=" ";
    //}
   // console.log(answer);
}
//create 2d array
function sortWeight(originalStringArray,stringSumArray){
    let detailsArray=new Array(originalStringArray.length);
    let takeValue=0;
    let array=[];
    for(let i=0;i<stringSumArray.length;i+=1){
        detailsArray[i]=new Array(2);
    }
    for(let i=0;i<originalStringArray.length;i++){
        detailsArray[i][0]=originalStringArray[i];
        detailsArray[i][1]=stringSumArray[i];
    }
    let Sort=detailsArray.sort(compareSecondColumn);
/*
1. Sort the array anyway
2. Take slices for same 2nd column value in temporary
3. sort them based in same array
4. Now store them back and replace them
*/



    for(let i=0;i<Sort.length;i++){
        for(let j=0;j<Sort.length;j++){
            if(Sort[i][1]===Sort[j][1]){
                takeValue++;
                if(takeValue>1) {
                    takeValue=i;
                    
                }
            }
        }
        if(!arrayAlreadyHasArray(array,Sort[takeValue])) array.push(Sort[takeValue]);
        takeValue=0;
    }
    console.log(array);
}
//sort
function compareSecondColumn(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1: 1;
    }
}
//check for common values

function arrayAlreadyHasArray(arr, subarr){
    for(var i = 0; i<arr.length; i++){
        let checker = false
        for(var j = 0; j<arr[i].length; j++){
            if(arr[i][j] === subarr[j]){
                checker = true
            } else {
                checker = false
                break;
            }
        }
        if (checker){
            return true
        }
    }
    return false
}