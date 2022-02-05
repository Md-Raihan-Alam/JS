function tribonacci(result,len){
    if(len===0){
        return [];
    }
    if(len<=3){
        let res=[];
        for(let i=0;i<len;i++) 
            res.push(result[i]);
            return res;
    }
    if(result.length>=len){
        return result;
    }
    result.push(result[result.length-3]+result[result.length-2]+result[result.length-1]);
    return tribonacci(result,len);
}