function DNAStrand(dna){
  let compStrand="";
  for(let i of dna){
    i==='A' ? compStrand+='T' : i==='G' ? compStrand+='C' : i==='T' ? compStrand+='A' : i==='C' ? compStrand+='G' :'';
  }
  return compStrand;
}
let data="ATTGC";
console.log(DNAStrand(data));
/* clever solution 
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}
*/