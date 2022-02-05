var moveZeros = function (arr) {
    let zero='';
    let zeroStr=''
    arr.map((elements)=>{
        if(elements==0){
            zero=arr.splice(arr.indexOf(0),1);
            zeroStr=parseInt(zero);
            arr.push(zeroStr);
            zeroStr='';
        }
    });
    parseInt(arr);
  return arr;
}
moveZeros([1,2,0,1,0,1,0,3,0,1]);
/*clever one
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/