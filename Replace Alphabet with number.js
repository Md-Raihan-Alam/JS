const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
const sentence='I AM Raihan';
function replaceAlphabet(str){
    let returnStr='';
    let returnNumber='';
    for(let i=0;i<str.length;i++){
        returnStr+=str[i].toLowerCase(str[i]);
    }
    for(let s=0;s<returnStr.length;s++){
        for(let w=0;w<alphabet.length;w++){
                    if(returnStr[s]==alphabet[w]){
                        returnNumber+=`${number[w]}`;
                        returnNumber+=' ';
                    }
        }
    }
    let replaceNum=returnNumber.substring(0,returnNumber.length-1);
    return replaceNum;
}
//clever solution
/*
function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}*/