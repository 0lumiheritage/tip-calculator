'use strict';
const input=document.querySelector('.bill');
const click1=document.querySelector('.btn1');
const click2=document.querySelector('.btn2');
const click3=document.querySelector('.btn3');
const click4=document.querySelector('.btn4');
const click5=document.querySelector('.btn5');
const result1=document.querySelector('.result1');
const input2=document.querySelector('.alt');
const noPeople=document.querySelector('.people');
const result2=document.querySelector('.result2');
const reset=document.querySelector('.reset');
console.log(noPeople)

click1.addEventListener('click',()=>{  
     const bill=Number(input.value);
     console.log(bill);
    const tip=bill*0.05;
    console.log(tip);
    const total=bill+tip;
    console.log(total);
    const people=Number(noPeople.value);
    console.log(people);
    result1.textContent=(tip/2).toFixed(2);
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);
});

click2.addEventListener('click',()=>{
    const bill=Number(input.value);
    const tip=bill*0.10;
    const total=bill+tip;
    const people=Number(noPeople.value);
      result1.textContent=(tip/2).toFixed(2);
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);
});
click3.addEventListener('click',()=>{
    const bill=Number(input.value);
    const tip=bill*0.15;
    const total=bill+tip;
    const people=Number(noPeople.value);
    result1.textContent=(tip/2).toFixed(2)
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);
});
click4.addEventListener('click',()=>{
    const bill=Number(input.value);
    const tip=bill*0.20;
    const total=bill+tip;
    result1.textContent=(tip/2).toFixed(2);
    const people=Number(noPeople.value);
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);
});
click5.addEventListener('click',()=>{
    const bill=Number(input.value);
    const tip=bill*0.25;
    const total=bill+tip;
    const people=Number(noPeople.value);
    result1.textContent=(tip/2).toFixed(2)
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);
});

input2.addEventListener('input',()=>{
    const bill=Number(input.value);
    const tip=bill*(Number(input2.value)/100);
    const total=bill+tip;
    const people=Number(noPeople.value);
    result1.textContent=(tip/2).toFixed(2)
    const perPerson=total/people;
    result2.textContent=perPerson.toFixed(2);    
});
reset.addEventListener('click',()=>{
    input.value='';
    input2.value='';
    noPeople.value='';
    result1.textContent='0.00';
    result2.textContent='0.00';
});