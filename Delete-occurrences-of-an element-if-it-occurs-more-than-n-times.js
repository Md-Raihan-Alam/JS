//https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/javascript
function deleteNth(arr,n){
    let demArr=new Map();
    for(let i of arr)
      {
        if(demArr.has(i))
          {
              let f=demArr.get(i);
              if(f<n)
                demArr.set(i,demArr.get(i)+1); 
          }
        else
          demArr.set(i,1);
      }
    let result=new Array();
    let originalArr=new Map();
    for(let i of arr)
    {
      if(originalArr.has(i))
      {
        originalArr.set(i,originalArr.get(i)+1);
      }else
        originalArr.set(i,1);
      if(originalArr.get(i)<=demArr.get(i))
      {
        result.push(i);
      }
    }
    return result;
  }