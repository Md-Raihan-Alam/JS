function nouveau (Constructor,...data) {
    let obj={};
    Object.setPrototypeOf(
        obj,
        Constructor.prototype
    );
    let res=Constructor.call(obj,...data);
    if(res !==null && typeof res==='object'){
        return res;
    }
    return obj;
}