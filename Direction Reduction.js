function dirReduc(arr){
  let spliced=false;
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]==="NORTH"){
      if(arr[i+1]==="SOUTH"){
        arr.splice(i,2);
        spliced=true;
        break;
      }
    }
    if(arr[i]==="WEST"){
      if(arr[i+1]==="EAST"){
        arr.splice(i,2);
        spliced=true;
        break;
      }
    }
    if(arr[i]==="EAST"){
      if(arr[i+1]==="WEST"){
        arr.splice(i,2);
        spliced=true;
        break;
      }
    }
    if(arr[i]==="SOUTH"){
      if(arr[i+1]==="NORTH"){
        arr.splice(i,2);
        spliced=true;
        break;
      }
    }    
  }
  if(spliced===true) dirReduc(arr);
  return arr;
}
/*
another solution
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
 */