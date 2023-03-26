const bill = document.querySelectorAll("[type='Text']")[0];
const ppl = document.querySelectorAll("[type='Text']")[2];

const tips = document.querySelectorAll('[for]');
const tipAmounts = [0.05, 0.1, 0.15, 0.2, 0.25];

const zero = document.querySelector(".form__JS")
const output = document.getElementsByClassName("result__output");
const radio = document.querySelectorAll("[type='radio']");
const textInput = [bill, ppl];

bill.focus()


textInput.forEach((e)=>{
    e.addEventListener("input", ()=>{
        let accessibility;


        // testing if there is any empty inputs
        let x;
        let tests=[];
        for(let i=0; i<textInput.length; i++){
            if(textInput[i].value.length===0){
               x=false;
               tests.push(x);
            }else{
                x=true;
                tests.push(x)
            }
        }
        for(let j=0; j<radio.length; j++){
            if(radio[j].checked === false){
                continue;
            }else{
                x=true;
                tests.push(x)
            }
        }

        // evalaluating the accessibility based on the given array
        for(const test of tests){
            if(test === false){
                accessibility=false;
                break;
            }else{
                accessibility=true;
                continue;
            }
        }
        // console.log(tests)
        // console.log(accessibility)


        // formatting inputs based on the accessibility value
        if(accessibility===false){
            for(let i=0; i<textInput.length; i++){
                if(textInput[i].value.length===0){
                    textInput[i].style.border="red solid 1px"
                }else{
                    textInput[i].style.border="green solid 1px"
                }
            }


        }else{
            for(let i=0; i<textInput.length; i++){
                if(textInput[i].value.length>0){
                    textInput[i].style.borderColor="green"
                }
            }
        }

        // ensuring that the user typing numbers 
        for(let x=0; x<textInput.length; x++){
            if(textInput[x].value.match(/[^0-9]/g) && accessibility===false){
                textInput[x].style.borderColor="blue"
                textInput[x].value=""
            }else if(textInput[x].value.match(/[^0-9]/g) && accessibility===true){
                textInput[x].style.borderColor="blue"
                textInput[x].value=""
            }
        }

        if(Number(textInput[1].value)===0 && textInput[1].value!=="" && accessibility===true){
            zero.style.display="block"
            textInput[1].value=''
            console.log(`true`)
        }else if(Number(textInput[1].value)!==0 && accessibility===true){
            zero.style.display="none"
        }else{
            zero.style.display="none"
        }

        for(let i=0; i<radio.length; i++){
            if(radio[i].checked===true){
                tipPercentage=tipAmounts[i];
                break;
            }else{
                continue;
            }
        }
        tipAmountPerson=bill.value*tipPercentage;
        totalAmount=tipAmountPerson*ppl.value
        console.log(tipAmountPerson)
        output[0].textContent= `$${tipAmountPerson.toFixed(2)}`;
        output[1].textContent= `$${totalAmount.toFixed(2)}`
    }); 
});
    let tipAmountPerson;
    let totalAmount;
    let tipPercentage;
radio.forEach((e)=>{
    e.addEventListener("change", ()=>{
        for(let i=0; i<radio.length; i++){
            if(radio[i].checked===true){
                tipPercentage=tipAmounts[i];
                break;
            }else{
                continue;
            }
        }
        tipAmountPerson=bill.value*tipPercentage;
        totalAmount=tipAmountPerson*ppl.value
        console.log(tipAmountPerson)
        output[0].textContent= `$${tipAmountPerson.toFixed(2)}`;
        output[1].textContent= `$${totalAmount.toFixed(2)}`
    })
})

const reset = document.querySelector("[type='reset']");
reset.addEventListener("click",()=>{

    bill.value= 0 
    bill.focus()
    ppl.value=''
    output[0].textContent= `$0.00`;
    output[1].textContent= `$0.00`
})



