function rgb(r, g, b){
  r>255?r=255:r=r;
  g>255?g=255:g=g;
  b>255?b=255:b=b;
  r<0?r="0":r=r;
  g<0?g="0":g=g;
  b<0?b="0":b=b;
  let hexaR=Number(r).toString(16);
  let hexaG=Number(g).toString(16);
  let hexaB=Number(b).toString(16);
  hexaR>255?hexaR=255:hexaR=hexaR;
  hexaG>255?hexaG=255:hexaG=hexaG;
  hexaB>255?hexaB=255:hexaB=hexaB;
  hexaR.length===1?hexaR=`0${hexaR}`:hexaR=hexaR;
  hexaG.length===1?hexaG=`0${hexaG}`:hexaG=hexaG;
  hexaB.length===1?hexaB=`0${hexaB}`:hexaB=hexaB;
  hexaR=hexaR.toUpperCase();
  hexaG=hexaG.toUpperCase();
  hexaB=hexaB.toUpperCase();
  return `${hexaR}${hexaG}${hexaB}`;
}
/*
another solution
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}
*/