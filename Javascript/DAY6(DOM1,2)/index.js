
/*function eventFunction(){
    console.log('I have clicked on the document ')
};

document.addEventListener('click',eventFunction);
*/



//remove eventListener
/*function eventFunction(){
    console.log('I have clicked on the document ')
};

document.removeEventListener('click',eventFunction);//click ke baad jo likha ghai voh fx hai 
*/


/*
//eventObject
const content = document.querySelector('#wrapper');
content.addEventListener('click',function(event){
    console.log(event);
})
*/


/*
let links=document.querySelectorAll('a');
let thirdLink=links[2];

thirdLink.addEventListener('click',function(event){
    event.preventDefault();
    console.log('mza aaya,accha lga');
});
*/


/*
let myDiv=document.createElement('div');

function paraStatus(){
    console.log('Para'+event.target.textContent);
}
myDiv.addEventListener('click',paraStatus);

for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='this is para' + i;

   myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);   
*/



let element=document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if(event.target.nodeName=='SPAN'){
     console.log('span pr click kia hai' + event.target.textContent);   
    }
});