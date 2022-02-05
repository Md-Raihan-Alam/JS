function anagrams(word,words){
    let result=[];
    let tempArray=[];
    let total=0;
    //find the word included
    words.forEach((element) => {
        if(element.length==word.length){
            for(let i=0;i<element.length;i++){
                if(word.includes(element[i])){
                        total++;
                }
            }
            if(total==word.length){
                tempArray.push(element);
            }
        }
        total=0;
    });
    //remove the repeaters
   tempArray.forEach((element)=>{
    for(let i=0;i<word.length;i++){
           if(element.includes(word[i])){
            total++;   
           }
       }
       if(total==word.length){
           result.push(element);
       }
       total=0;
   });
    return result;
}
/*another solution

String.prototype.sort = function() {
  return this.split("").sort().join("");
};

function anagrams(word, words) {
  return words.filter(function(x) {
      return x.sort() === word.sort();
  });
}

*/