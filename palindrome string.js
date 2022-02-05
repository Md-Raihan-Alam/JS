function isPalindrome(line) {
  let stringLine=String(line);
  let storage=[];
  let filo="";
  for(let i of stringLine){
    storage.push(i);
  }
  console.log(storage.length);
  for(let i=storage.length-1;i>=0;i--){
      filo+=storage[i];
  }
  if(stringLine===filo) return true;
  return false;
}
/*
another solution=
function isPalindrome(line) {
  return (String(line) == String(line).split('').reverse().join('') ) 
}
*/