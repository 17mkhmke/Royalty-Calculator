let display = document.getElementById('display');
let operator = document.getElementById('operator');
let dot = document.getElementById('decimal')
let buttons = Array.from(document.getElementsByClassName('button'));
let decimalClick = true;
dot.addEventListener("click", (e) =>{
    if(decimalClick) {
        let display = document.getElementById('decimal').innerText;
        display.button += dot.textContent;
        decimalClick= false;
    }
})

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CA':                          /*clear All*/
                display.innerText = '0';
                break;
            case 'DEL':
                 if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1); /*backspace*/
                 }
                    break;
            case '=':
                display.innerText = eval(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
   
    });
});


