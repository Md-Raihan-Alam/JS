function isPangram(string){
    let allLowerCase=string.toLowerCase();
    let detectPangram=1;
    let characters=["a","b","c","d","e","f","g","h","i","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    for(let i=0;i<characters.length;i++){
      if(!allLowerCase.includes(characters[i])) detectPangram=0;
    }
    return detectPangram===0? false: true;
  }