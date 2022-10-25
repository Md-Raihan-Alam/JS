// https://www.codewars.com/kata/523f5d21c841566fde000009
function arrayDiff(a, b) {
    let objA={};
    let objB={};
    for(let i of a)
      if((i in objA)==false)
        objA[`${i}`]=1;
      else
        objA[`${i}`]++;
    for(let i of b)
      if((i in objB)==false)
        objB[`${i}`]=1;
      else
        objB[`${i}`]++;
    let temp=[];
    if(Object.keys(objA).length>Object.keys(objB).length)
      {
        for(const [keys,value] of Object.entries(objA))
          {
            if((keys in objB)==false)
              {
                for(let i=0;i<value;i++)
                  temp.push(Number(keys));
              }
          }
      }
    else{
      for(const [keys,value] of Object.entries(objA))
          {
            if((keys in objB)==false)
              {
                for(let i=0;i<value;i++)
                  temp.push(Number(keys));
              }
          }
    }
    let ans=[];
    for(let i of a)
      {
        if(temp.includes(i)==true)
          ans.push(i);
      }
    return ans;
  }
//another solution
//   function array_diff(a, b) {
//     return a.filter(e => !b.includes(e));
//   }