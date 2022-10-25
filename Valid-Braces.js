//https://www.codewars.com/kata/5277c8a221e209d3f6000b56
function validBraces(braces){
    let arr=[];
    for(let i of braces)
      {
        if(i=='}')
          {
           let last=arr[arr.length-1];
            if(last=='{')
              {
                arr.pop();
              }
            else
              {
                return false;
              }
          }
        else if(i==')')
          {
            let last=arr[arr.length-1];
            if(last=='(')
              {
                arr.pop();
              }
            else{
              return false;
            }
          }
        else if(i==']')
          {
            let last=arr[arr.length-1];
            if(last=='[')
              {
                arr.pop();
              }
            else{
              return false;
            }
          }
        else{
          arr.push(i);
        }
      }
    if(arr.length==0)
        return true;
    else
        return false;
  }