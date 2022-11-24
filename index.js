let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CA':                          /*clear All*/
                display.innerText = '0';
                break;
            case 'DEL':
                 if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1); /*delete*/
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
