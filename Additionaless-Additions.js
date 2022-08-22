//https://www.codewars.com/kata/536ce83e2f403659a5000d47/train/javascript
function add (x, y) {
    while (y != 0)
    {
        var carry = x & y;  
        x = x ^ y; 
        y = carry << 1;
    }
    
    return x;
}