// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
    let res="";
    let ans=string.split(" ").forEach((e)=>{
      if(e.length>=5){
        let str=e.split("").reverse().join("");
        res+=str;
        res+=" ";
      }
      else{
        res+=e;
        res+=" ";
      }
    });
    return res.trim();  
  }