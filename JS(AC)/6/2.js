/*
function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n%2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n%2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}*/




/*
const calculator = {
    num:55,
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};
*/





/*
          this keywoed
const student={
    name:"ayush",
    age:19,
    eng:95,
    maths:94,
    hindi:89,
    getAvg(){
        console.log(this);
        let avg=(this.eng+this.maths+this.hindi)/3;
        console.log(`${this.name}got avg marks${avg}`);
    }
}
function getAvg(){
    console.log(this);
}
*/







/*
     //try and catch
console.log("hello");
console.log("hello2");
//let a=5;
try{
    console.log(a);
}catch{
    console.log("caught error");
}

console.log("hello4");
console.log("hello6");
*/







/*
//....arrow fx
const sum=(a,b)=>{
    console.log(a+b);
};
const cube=a=>{//agr single arg hai toh bracket lgao ya na lgao()
    return a*a*a;
};
const name=()=>{
    console.log("hello");
};
//implicit return
const mul=(a,b)=>a*b; 
const add=(a,b)=>a+b;
*/






/*
//settimeout & setInterval
console.log("hi");

//setTimeout(()=>{
//    console.log("ayush");
//},18000);

let id1=setInterval(()=>{
    console.log("ayush");
},6000);
console.log(id1);

let id2=setInterval(()=>{
    console.log("Ayush");
},8000);
console.log(id2);
*/



//this with arrow fx

/*const student={
    name:"ayush",
    age:19,
    eng:95,
    maths:94,
    hindi:89,
    prop:this,//global scope
    getName:function(){//normal fx
        console.log(this);
        return this.name;
    },

    getMarks:()=>{//arrow fx
        console.log(this);//parent scope->window
        return this.age;
    },
};*/


//Ques.... Write an arrow function that returns a square of number'n'
const square=n=>n*n;
console.log(square(5));

//Ques... Write a function that prints "hello word" 5 times at interval of 2s each
let id1=setTimeout(()=>{
    console.log("hello world");
},2000);

setInterval(() => {
    clearInterval(id1);
    console.log("clear interval");
}, 10000);







