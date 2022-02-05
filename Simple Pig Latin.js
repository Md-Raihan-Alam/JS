function pigIt(str){
  let finalAdd=false;
  let reverseString="";
  let specialIndexes=0;
  let firstWords=[];
  let ignoreWordsIndexes=[];
  let punctuationMarks=[".","?",",","-","!"];
  let newReverseString="";
  ignoreWordsIndexes.push(0);
  firstWords.push(str[0]);
  for(let i=0;i<str.length;i++){
    if(str[i]===" ") {
      let word=i+1;
       let Add=false;
        for(let j=0;j<punctuationMarks.length;j++){
          if(str[word]===punctuationMarks[j]){
            Add=true;
          }
        }
      if(!Add){
        firstWords.push(str[word]);
        ignoreWordsIndexes.push(word);
      }
    }
  }
  for(let i=0;i<str.length;i++){
    let take=true;
    ignoreWordsIndexes.map((e)=>{
      if(i===e) take=false;
    })
    if(!take) continue;
    else reverseString+=str[i];
  }
  for(let i=0;i<reverseString.length;i++)
  {
    if(reverseString[i]===" "){
      let word=i-1;
      let Add=false;
      for(let j=0;j<punctuationMarks.length;j++){
        console.log(reverseString[word]);
        if(reverseString[word]===punctuationMarks[j]){
          Add=true;
        }
      }
      if(!Add){
        newReverseString+=`${firstWords[specialIndexes]}ay`;
        firstWords[specialIndexes];
        specialIndexes++;
      }
    }
    newReverseString+=reverseString[i];
  }
  for(let j=0;j<punctuationMarks.length;j++){
   if(newReverseString[newReverseString.length-1]===punctuationMarks[j]){
     finalAdd=true;
   }
  }
  if(!finalAdd) newReverseString+=`${firstWords[firstWords.length-1]}ay`;
  return newReverseString; 
}
/*
clever solution
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
*/