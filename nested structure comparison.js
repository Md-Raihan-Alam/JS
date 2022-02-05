//check the string to number first, you failed
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    // Note: You are given a function isArray(o) that returns
    // whether its argument is an array.
Array.prototype.sameStructureAs = function (other) {
    if(Array.isArray(other)===false) return false;
    console.log(this.length);
    console.log(other.length);
};
