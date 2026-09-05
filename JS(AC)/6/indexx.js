function rollDice(){
    let random=Math.floor(Math.random()*5)+1;
    console.log(random);

}
rollDice();
rollDice();
rollDice();
rollDice();
rollDice();

function table(n){
    for(let i=n;i<n*10;i=i+=n){
        console.log(i);
    }
}
table(45);

function sum(a,b){
    return a+b;
}
console.log(sum(5,7));
console.log(sum(sum(5,7),7));

function isAdult(age){
    if(age>=18){
        return "adult";
        console.log("ooo");
    }
    else{
        return "not adult";
    }
}

function getSum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}

let str=["hi","hello","guys"];
function concat(str){
    let res="";
    for(let i=0;i<str.length;i++){
        res+=str[i];
    }
    return res;
}