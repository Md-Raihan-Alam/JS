function firstNonRepeatingLetter(s) {
  if(s.length===1) return s;
  let characters=[];
  let repeat=0;
  let result="";
  for(let i=0;i<s.length;i++){
      characters.push(s[i]);
  }
    for(let i=0;i<s.length;i++){
        for(let j=0;j<characters.length;j++){
            if(s[i].toLowerCase()===characters[j] || s[i].toUpperCase()===characters[j]) {
                repeat=repeat+1;
            }
        }
        if(repeat===1) {
            repeat=i;
            break;
        }
        repeat=0;
   }
  if(repeat===0) return '';
  result=s[repeat];
  return result;
}