//https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
function sumStrings(a,b) {
  let numString,numStringTwo;
  if(a[0]=='0') {
    numString=a.replace(a[0],'');
  }else numString=a;
  if(b[0]=='0'){
    numStringTwo=b.replace(b[0],'');
  } else numStringTwo=b;
  if(numString.length<numStringTwo.length)
  {
    let temp=numString;
    numString=numStringTwo;
    numStringTwo=temp;
  }
  numString=numString.split("").reverse().join("");
  numStringTwo=numStringTwo.split("").reverse().join("");
  let len,lowerLen;
  if(numString.length!=numStringTwo.length){
    currentLen=numString.length>numStringTwo.length?numString.length:numStringTwo.length;
    lowerLen=numString.length>numStringTwo.length?numStringTwo.length:numString.length;
  }else{
    lowerLen=numString.length;
    currentLen=0;
  }
  let totalSum='';
  let carry=0;
  for(let i=0;i<lowerLen;i++)
  {
      let numOne=Number(numStringTwo[i]);
      let numTwo=Number(numString[i]);
      let newSum=numOne+numTwo+carry;
      carry=0;
      if(newSum>=10)
      {
          let currentNum=String(newSum);
          carry=Number(currentNum[0]);
          totalSum+=currentNum[1];
      }else{
          totalSum+=String(newSum);
      }
  }
  if(carry!=0 && currentLen==0) totalSum+=String(carry);
  if(currentLen!=0){
    for(let i=lowerLen;i<currentLen;i++)
    {
      let newSum=Number(numString[i])+carry;
      if(newSum>=10)
      {
        let currentNum=String(newSum);
        carry=0;
        carry=Number(currentNum[0]);
        totalSum+=currentNum[1];
      }else{
        totalSum+=String(newSum);
        carry=0;
      }
    }
  if(carry!=0) totalSum+=String(carry); 
  }
  return totalSum.split('').reverse().join('');
}