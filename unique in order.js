var uniqueInOrder=function(iterable){
    let unique=iterable[0];
    let allUniques=[];
    allUniques.push(unique);
    for(let i=0;i<iterable.length;i++){
        if(unique!==iterable[i]){
            unique=iterable[i];
            allUniques.push(unique);
        }
    }
    return allUniques;
  }
  //return [...iterable].filter((a, i) => a !== iterable[i-1])