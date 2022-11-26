let display = document.getElementById('display');
// let operator = document.getElementById('operator');
// let dot = document.getElementById('decimal')
let buttons = Array.from(document.getElementsByClassName('button'));
let decimalClick = true;
// dot.addEventListener("click", (e) =>{
//     if(decimalClick) {
//         let dec = document.getElementById('decimal').innerText;
//         display.value += dec;
//         decimalClick= false;
//     }
// });

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CA':                          /*clear All*/
                display.innerText = '0';
                decimalClick=true;
                break;
            case 'DEL':
                 if(display.innerText[display.innerText.length -1]){
                    display.innerText = display.innerText.slice(0, -1); /*backspace*/
                    decimalClick=true;
                 }
                 else {
                    display.innerText = display.innerText.slice(0, -1);
                    
                 }
                    break;
            case '=':
                display.innerText = eval(display.innerText);
                if(display.innerText.includes('.')) {
                    decimalClick= false;
                }
                else {
                    decimalClick=true;
                }
                break;
            case '.':
                if((decimalClick)){
                    
                    
                    display.innerText += e.target.innerText;
                    decimalClick= false;
                }
                break;
            default:
                display.innerText += e.target.innerText;
                // decimalClick = true;
            break;
        }
   
    });
});
function validate(entry) {

}


