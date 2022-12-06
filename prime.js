function checkPrime(number){
let factors =0
 for(i=i; i<=number; i++){
  

 if(number%i ==0){
factors++
  }
 
if(factors ==2){
  return true;
 }
  return false;
 }
let ans = checkPrime(13);

if(ans == true){
console.log("Prime")
}
else{
console.log("Not Prime")
}