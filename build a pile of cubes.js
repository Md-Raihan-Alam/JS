function findNb(m) {
  let total=0;
  let n=0;
  while(total<m){
    n++;
    total+=(n*n*n);
  }
  return total===m ? n:-1;
}