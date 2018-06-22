
//declaring variables

var min = 1;
var max = 20;

var winningNumber = 2;
var gussesLeft = 3;

// UI values

const minimumNumber = document.querySelector('.min-num');
const maximumNumber = document.querySelector('.max-num');
const gussNumber = document.querySelector('.guess-num');
const gussButton = document.querySelector('.guess-btn');
const message = document.querySelector('.message');

minimumNumber.textContent = min;
maximumNumber.textContent = max;

gussButton.addEventListener('click',function(){
  var guss = parseInt(gussNumber.value);
  if(isNaN(guss) || guss < min || guss > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }else{
    if(guss === winningNumber){
      gussNumber.disabled  = true;
      gussNumber.style.borderColor = "green";
      setMessage(`${winningNumber} is correct, YOU WIN!`, 'green')
    }else{
      gussesLeft -= 1;
      if(gussesLeft == 0){
        setMessage(`Currect number is ${winningNumber},YOU LOSE`,'red');
      }else{
        setMessage(` ${gussNumber.value} is Wrong, you have ${gussesLeft} guess left.`,'red');
      }
    }
  }
});


function setMessage(messageDemo,colour){
  message.style.color = colour;
  message.textContent = messageDemo;
}
function reset(){
  gussNumber.disabled  = false;
  gussNumber.style.borderColor = "grey";
  setMessage(`${winningNumber} is correct, YOU WIN!`, 'green')
}
