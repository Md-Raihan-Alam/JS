// TODO: implement 'mergesorted'
// test ensures: a and b are both arrays, consisting entirely of integers...
//...,both arrays are sorted and contain at least 1 integer.
// ALSO: the Array.sort function has been disabled for this excercise.
function mergesorted(a, b) {
  const output=[];
  let leftIndex=0;
  let rightIndex=0;
  while(leftIndex<a.length && rightIndex<b.length){
      const leftEl=a[leftIndex];
      const rightEl=b[rightIndex];
      if(leftEl<rightEl){
          output.push(leftEl);
          leftIndex++;
      }else{
          output.push(rightEl);
          rightIndex++;
      }
  }
  return [...output,...a.slice(leftIndex),...b.slice(rightIndex)];
}
