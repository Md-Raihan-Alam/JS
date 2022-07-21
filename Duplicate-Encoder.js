//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    word=word.toLowerCase();
    let encodeWord="";
    let found=0;
    for(let i=0;i<word.length;i++)
      {
        for(let j=0;j<word.length;j++)
          {
            if(word[i]===word[j])
                found++;
          }
        if(found>1) encodeWord+=')';
        else encodeWord+='(';
        found=0;
      }
    return encodeWord;
  }