function add(a, b) {
    let size=a.length>b.length? a.length:b.length;
    let addSum;
    let showValue=[];
    let takeValue=[],takeValueTwo=[];
    let tempValue=0;
    let finalNumber=false;
    [...a].forEach((e)=>{
        takeValue.push(Number(e));
    });
    [...b].forEach((e)=>{
        takeValueTwo.push(Number(e));
    });
    if(size>takeValue.length){
        let remainingValue=size-takeValue.length;
        for(let i=0;i<remainingValue;i++){
            takeValue.unshift(0);
        }
    }
    if(size>takeValueTwo.length){
        let remainingValue=size-takeValueTwo.length;
        for(let i=0;i<remainingValue;i++){
            takeValueTwo.unshift(0);
        }
    }
    for(let i=size-1;i>=0;i--){
        if(i==0) finalNumber=true;
        addSum=String(takeValue[i]+takeValueTwo[i]+tempValue);
        if(!finalNumber){
            if(addSum>=10){
                tempValue=Number(addSum[0]);
                showValue.unshift(String(addSum[1]));
            }else{
                showValue.unshift(String(addSum));
                tempValue=0;
            }
        }else{
            showValue.unshift(String(addSum));
        }
    }
    return showValue.join('');
}