// https://www.codewars.com/kata/52efefcbcdf57161d4000091
function count (string) {  
    let obj={};
    for(let i of string)
      {
        if((i in obj)==false)
          {
            obj[`${i}`]=1;
          }else{
            obj[`${i}`]++;
          }
      }
    return obj;
  }