fuction checkprime(num){
let counter=0;
for(let i=1;i<=num;i++){
if(num%2==1){
counter++;
}

}
if(counter ==2){
return true;
}
return false;
}
