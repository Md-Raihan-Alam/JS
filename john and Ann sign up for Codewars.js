let johnDayOne=0;
let johnCodeDone=0;
let johnTotalDays=[];
let annDayOne=1;
let annCodeDone=1;
let sumAnnCodeDone=1;
let annTotalDays=[];
function john(n) {
    // totalDays.push(johnDayOne);
    // totalDays.push(johnCodeDone);
    // if(totalDays.length===n+1) return totalDays;
    // else{
    //     if(totalDays===n){
            
    //     }
    // }
}
function ann(n) {
    annTotalDays.push(annDayOne);
    annTotalDays.push(annCodeDone);
    if(annTotalDays.length===n) return annTotalDays;
    else{
        annDayOne++;
        annCodeDone++;
        return ann(n);
    }
}

function sumJohn(n) {
    // your code
}

function sumAnn(n) {
    let sumAnnCode=0;
    for(let i=0;i<Math.floor(n/2);i++) {
        // console.log(sumAnnCode);
        sumAnnCode+=sumAnnCodeDone;
        sumAnnCodeDone++;
    }
    return sumAnnCode;
}
