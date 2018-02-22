function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  console.log("I am 1 strange loop.")
  for(;;){
    if(i === 0)break;
    console.log(i);
    i--;
  }
}
