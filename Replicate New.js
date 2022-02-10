///Read this->https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript
//https://zeekat.nl/articles/constructors-considered-mildly-confusing.html
function nouveau(func) {
    var res = {};
    if (func.prototype !== null) {
        res.__proto__ = func.prototype;//__proto__ is a property, in every JavaScript object, which  points to object 's constructor function's prototype property
    }
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
    if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
        return ret;
    }
    return res;
}