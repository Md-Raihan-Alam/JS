function rot13(message){
  let input='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let replace='NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let encoded='';
  for(let i=0;i<message.length;i++){
      if(input.includes(message[i])){
        const index=input.indexOf(message[i]);
        encoded+=replace[index];
      }else{
          encoded+=message[i];
      }
  }
  return encoded;
}
/*another solution

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}

*/
