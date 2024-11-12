let inputValue = document.querySelector('.input-text');
let resultText = document.querySelector('.result-text');
let header = document.querySelector('.title');
// let title = document.title;

let convertBtn = document.querySelector('.convertBtn');
let resetBtn = document.querySelector('.resetBtn');
let changeBtn = document.querySelector('.changeBtn');

convertBtn.addEventListener('click', function(){
    
    if(+inputValue.value){

        let flag = inputValue.placeholder.indexOf("C");

        if(flag !== -1){
            let fahrenheit  = (inputValue.value * 1.8) + 32;
            resultText.innerHTML = inputValue.value + '&deg;C to ' + fahrenheit + '&deg;F';
        }else{
            let centigrade = (inputValue.value - 32) / 1.8;
            resultText.innerHTML = inputValue.value + '&deg;F to '+ centigrade + '&deg;C';
        }
        
        resultText.style.color = '#F0FC28';
        resultText.style.fontSize = '30px';

    }else if(inputValue.value === ""){

        resultText.innerHTML = 'Write correct value!'
        resultText.style.color = '#8E3802';
        resultText.style.fontSize = '30px';

    }else if(inputValue.value){
        
        resultText.innerHTML = 'Wrong value!'
        resultText.style.color = '#8E3802';
        resultText.style.fontSize = '30px';
    }
})

resetBtn.addEventListener('click', function(){

    inputValue.value = "";
    resultText.innerHTML = "";

})

changeBtn.addEventListener('click', function(){

    let flag = inputValue.placeholder.indexOf("C");

    if(flag !== -1){

        header.innerHTML = 'Convert  &deg;F to  &deg;C';
        inputValue.placeholder = "\xB0F";
        document.title = "\xB0F"+" to "+"\xB0C";

    }else{

        header.innerHTML = 'Convert &deg;C to &deg;F';
        inputValue.placeholder = "\xB0C";
        document.title = "\xB0C"+" to "+"\xB0F";
    }
})
