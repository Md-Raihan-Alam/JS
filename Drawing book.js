function pageCount(n, p) {
  let frontFlip = Math.floor(p/2);
  let backFlip = Math.floor((n/2)-frontFlip);
  return frontFlip>backFlip? backFlip:frontFlip;
}
pageCount(7,4)
/*
There are two possible ways for Brie to flip her book open: either from the front or the back. The point of the function is to determine in which way she would have to flip less to get to the target page.

For the first case i.e. Front flip

The number of flip she has to make is just the lower bound of the target page divided by 2 i.e.

Math.floor(p / 2).

For the seconde case i.e. Back flip

In this case, we firstly need to get the total number of flips to see through the entire pages of the book then minus the front flip from it. i.e.

Math.floor((n/2)-frontFlip).

Once the number of flip for the two ways have been dertermined, just take the min one. i.e.

Math.min(frontFlip, backFlip)
*/