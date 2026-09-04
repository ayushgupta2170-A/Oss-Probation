/*
function sync(){
    console.log('first');
}
sync();
console.log('second');
*/

/*
setTimeout(function(){
    console.log('third');
},5000)
function sync(){
    console.log('first');
}
sync();
console.log('second');
*/


/*
let meraPromise1=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am fresher1');
    },3000);
    resolve(2233);
    //return 2;
    //reject(new Error('bhaisahab error aa rhi'))
    
});
//console.log('phla1');

//meraPromise1.then((value) => {console.log(value)});
//meraPromise1.catch((value) => {console.log("recieed an error")});
       //aise likh skte hai
meraPromise1.then((value) => {console.log(value)},(error)=>{console.log("recieed an error")});
*/

/*
let meraPromise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('i am fresher2');
    },5000);
    //resolve(2233);
    //reject(new Error('bhaisahab error aa rhi'))
});
console.log('phla2');
*/


/*
          //multiple promise
let wadaa1=new Promise(function(resolve,reject){
    setTimeout(()=>{
    console.log('set timeout1 started');
    },2000);
    resolve(true);
})

let output=wadaa1.then(()=>{
let wadaa2=new Promise(function(resolve,reject){  
    setTimeout(()=>{
          console.log('setimeout started1');
    },3000);
    resolve("wadaa 2 resolved");  
})
return wadaa2;
});
output.then((value)=>console.log(value));
*/


        //async wait
/*async function abcd() {
    return "ayush";
} */

/*

async function utility(){
let maharashtraMausam=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("delhi mein bahutgarmi hai");
    },10000);
})    

let hardoiMausam=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("hardoi mein mausam bdiya hai");
    },6000);
}); 
let MM= await maharashtraMausam;
let HM=await hardoiMausam;

return [MM,HM];
}*/

         //fetch api
         /*
let obj={
    heading:"head"
}; 
async function utility(){        
let content= await fetch('https://jsonplaceholder.typicode.com/posts/1'); 
let output = await content.json();
console.log(output); 
}    
utility();  
*/



/*
async function helper(){

    let options={
         method:'POST',
        body:JSON.stringify({
            title:'ayush',
            body:'gupta',
            userId:19,
        }),
        headers:{
            'Content-Type':'application/json; charset=UTF-8',
        },
    };
    let content=await fetch('https://jsonplaceholder.typicode.com/posts',options);
    let response=content.json();
    return response;
    
}
async function utility(){
    let ans= await helper();
    console.log(ans);
    
}
utility();*/
let name="sher";
function init(){
    let name="Samsung";
    
    function displayName(){
        console.log(name);
    }
     return displayName;
}
let fun=init();
fun();

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const p1 = new Person("Ayush");
p1.greet();


/*
// math.js
export function add(a, b) {
  return a + b;
}
// app.js
import { add } from "./math.js";*/




