const display = document.getElementById('display');

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch
    {
        display.value = "error";
    }
}

document.addEventListener('keydown', (e) => {
   const pressedKeys = '0123456789+-*/().';
   if(pressedKeys.includes(e.key)){
    appendValue(e.key);
   }
   else if(e.key === 'Enter'){
    calculate();
   }
   else if(e.key === 'Backspace'){
    display.value=display.value.slice(0,-1);
   }
   else if(e.key === 'Escape'){
    clearDisplay();
   }
});