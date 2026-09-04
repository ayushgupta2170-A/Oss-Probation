//adding 100para

/*const t1=performance.now();
for(let i=0;i<=100;i++){
    let newElement=document.createElement('p'); 
    newElement.textContent='this is para'+i;

    document.body.appendChild(newElement);
}
const t2=performance.now();
console.log('this took'+(t2-t1)+"ms");
*/



/*
//optimising a bit
let myDiv=document.createElement('div');
const t3=performance.now();
for(let i=0;i<=100;i++){
    let element=document.createElement('p');
    element.textContent='this is para'+i;

    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
const t4=performance.now();
console.log('this took'+(t4-t3)+"ms");
*/


/*
//using fragment
let fragment=document.createDocumentFragment();
for(let i=0;i<=100;i++){
    let newElement=document.createElement('p'); 
    newElement.textContent='this is para'+i;

    fragment.appendChild(newElement);

    document.body.appendChild(newElement);
}
document.body.appendChild(fragment);//1 Reflow,1 repaint
*/


/*
//call stack
function addPara(){
    let para=document.createElement('p');
    para.textContent='Bollywood silver screen';
    document.body.appendChild(para);
}

function appendNewMessage(){
    let para=document.createElement('p');
    para.textContent='welcome in bollwood';
    document.body.appendChild(para);
}
addPara();
appendNewMessage();

document.addEventListener('click',function(){
    console.log('hello di');
});
*/




