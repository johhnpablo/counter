var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;
function increment() {
  if(currentNumber < 100) currentNumberWrapper.innerHTML = ++ currentNumber;
}
    

function decrement() {
  if(currentNumber > 0) currentNumberWrapper.innerHTML = -- currentNumber;
 
}
function reset() {
  currentNumber = 0;
  currentNumberWrapper.innerHTML = currentNumber;
 
}