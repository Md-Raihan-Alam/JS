function validParentheses(parens){
  let parensArray=[];
  for(let i=0;i<parens.length;i++){
    if(parens[i]=='(') parensArray.push('(');
    if(parens[i]==')'){
      if(parensArray.length==0){
        return false;
      }else parensArray.pop();
    }
  }
  return parensArray==0;
}