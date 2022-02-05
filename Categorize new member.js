let input=[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]];
function openOrSenior(data){
    let output=[];
  for(let i of data){
      if((i[0]>=55)&&(i[1]>7)){
        output.push('Senior');
      }else{
        output.push('Open');
      }
  }
  return output;
}
openOrSenior(input);
// clever solution->
// function openOrSenior(data){
//   return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
// }