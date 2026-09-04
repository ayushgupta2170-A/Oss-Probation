//console.log('hello kya haal chaal');


run();
//fx declaration
function run(){
    console.log('running');
}
//fx call
//run();

//Named function assignment
let stand=function walk(){
    console.log('running in the hell');
};

//Anonyms function assignment
let stand2=function(){      //walk hta diya
    console.log('running in the hell');
};
stand();//inn case of function assignment ye niche hi likhna pdega as comapared to fx declaration


let jump=stand;
jump();
stand2();

let x=1;
x='a';
console.log(x);

/*function sum(a,b){
    console.log(arguments);
    return a+b;
}*/

/*
function sum(a,b){
    let total=0;
    for(let value of arguments)
        total=total+value ;
    return total;
}
//console.log(sum(3,4));
//console.log(sum(1));//dusri value not defined maani jayegi
//console.log(sum());
//console.log(sum(1,2,0,4,5,6));//phle ke do liye jayenge

let ans=sum(2,3,4,5,6);
console.log(ans);
*/



      //REST OPERATOR
/*
function sum(num,value,...args){//last parameter ke aage allowed nhi  hai
    console.log(args);
}
sum(1,2,3,4,5,6);//1 num ke andr chla gya,2 value ke andr
*/



//DEFAULT PARAMETER
function interest(p,q,r){//agr aap r=9 dete hai toh voh lega,, same q=5,
    //r=5;//agr aap r=5 dete hai toh voh  yevala lega nhi toh voh upr vali apne aap lega,,
    return p*q*r/100;

}
//console.log(interest(1000,10,5));




//......getter,setter......

//getter->access properties
//setter->change or mutate properties
/*          
let person={
    fName:'Ayush',
    lName:'Gupta',
    get fullName(){
    return `${person.fName}  ${person.lName}`;//backTicks use kr rhe hai..
    },
    set fullName(value){
        if(typeof value!==String){
            throw new Error("you have not sent a string");
        }
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
};
//console.log(person);

/*get=fullName(){
    return `${person.fName} ${person.lName}`;//backTicks use kr rhe hai..
}*/
//console.log(person.fullName);
/*
try{
    person.fullName=true;
}
catch(e){
    alert(e);
}
//person.fullName='Rahul Kumar';
console.log(person.fullName);
*/


//SCOPES......
/*
{
    //let a=5;  //a ki value in brackets ke bahar nhi access kr skte
    var a=5;  //ye bahahr access kr skta hai
    //console.log(a);
}
console.log(a);
*/
/*
function walk(){
    var a=5;//var fx tk hi define hai
}
console.log(a);
*/

//for(var i=0;i<10;i++){

//}
//console.log(i);
//in case of let nhi milega output,but in var ans milega 10

//if (true){
   //let a=5;
//   var a=5;
//}
//console.log(a);
/*
function a(){
    const ab=5;
}
const ab=5;
function b(){
    const ab=5;
}*/



/*
//SORTING
let a=[10,5,4,89,8];
a.sort(function(a,b){
    return a-b;
});
console.log(a);
*/



//REDUCING ARRay
/*let arr=[1,2,3,4,5];
let total=0;

for(let value of arr)
    total=total+value;
console.log(total);
*/
let arr=[1,2,3,-5,6];
let totalSum=arr.reduce((accumulator,currentValue)=>accumulator + currentValue,0);
console.log("printing total sum");
console.log(totalSum);
