console.log('hello sir');

let lastName='Babbar';
let firstName=new String('love');

//let message='this is \n my \n first\n message';//iska use krna pdh rha ha
/*let message = `This
is my 
house`;
console.log(message);
//let words=message.split('');
//console.log(words);*/



/*let message = `Hello ${lastName},
Thanks for the opportunity, 
Regards,
Ayush`;
console.log(message);

let date=new Date();
let date2=new Date('JUNE 20 1998 07:15');

let date3=new Date(1998,6,20,7);
console.log(date3);*/


/*
//1.........ARRAYS
let numbers=[1,4,5,6,8];
console.log(numbers); 
//end->push
//beginning->unshift;
//middle->splice;
//searching
console.log(numbers);
console.log(numbers.indexOf(5));         

//we want to check if no exist in arrys
if(numbers.indexOf(4)!= -1)
    console.log("present");//bad practice

//good practice
console.log(numbers.includes(7));
//advanced version
console.log(numbers.indexOf(4,2));//ye primitive ke upr sikhs hai


//ab refernces ke upr
let courses=[
    {no:1,naam:'Ayush'},//yha pr address alg hai
    {no:2,naam:'Gupta'}
];
console.log(courses);
//console.log(courses.indexOf( {no:1,naam:'Ayush'}));//yha pr address alg hai
*/


/*let course = courses.find(function(course){
    return course.naam =='Ayush';
})
console.log(course);*/ //is nottaion ko chota krte hai

//let course = courses.find(course=>course.naam =='Ayush');
//console.log(course);

/*
//2......Removing element
let numbers3=[1,2,4,5,9,7,12];
//end
numbers3.pop();
//begginning
numbers3.shift();
//middlenumbers.
*/

/*
//3.......Emptying an array
let numbers1=[1,2,3,4,5];
let numbers2=numbers1;//yha pr copy nhi hua hai ,address mila hai 

//numbers=[];
//numbers1.length=0;//ye bhi acchin practice  hai
numbers1.splice(0,numbers1.length);//ye bhi acchi pracatice hai

console.log(numbers1);
console.log(numbers2);
*/



/*
//4.....combining &slicing arrays
let first=[1,2,3,5,6];
let second=[4,8,9];

let combined=first.concat(second);
console.log(combined);

let marks=[10,20,30,40,50,60,70,80,90];
let sliced=marks.slice(2);
//let sliced=marks.slice();
//let sliced=marks.slice(2,5);//yha pr jo 2th index hai voh nclude hai aur 5th exclude hai
console.log(sliced);
*/



/*
//5......Spread operator
let first=[1,2,3,5,6];
let second=[4,8,9];

let combined=[...first,'a',true, ...second ,'b',false];
console.log(combined);
//copy kaise create kre
let another=[...combined];
*/



/*
//6.....iterating array
let arr=[10,20,30,40,50];
//for(let value of arr){
//    console.log(value);
//}

//arr.forEach(function(number){
//    console.log(number);
//});  //isko agr arrow fx mein likhna hai

arr.forEach(number=>console.log(number));//alternate method of for-each loop in 1 line
*/



/*
//7....joining arary
let numberss=[10,20,30,50,60];
const joined=numberss.join(',');
console.log(joined);
*/



/*
//8....splits
let message='This is my first message';
let parts=message.split(' ');
console.log(parts);

let joined=parts.join('__\n');
console.log(joined);
*/


/*
//9.......Sorting arrays
let numbers1=[12,10,50,30,80,70,90];
numbers1.sort();
console.log(numbers1);

numbers1.reverse();
console.log(numbers1);
*/



/*
//10.....filtering arrays
let number=[1,3,-5,-6,-7,0];
//let filtered=number.filter(function(value){//ye engthy method
//    return value<=0;
//});
     //in arraow fx
let filtered=number.filter(value=>value<=0);     

console.log(filtered);
*/


/*
//11...mapping ararays
let numbers=[7,8,9,1,2];
console.log(numbers);
let items=numbers.map(function(value){
    return 'student_no'+value;
});
console.log(items);
*/

/*
//12...mapping objects
let numbers=[1,2,-6,-5];
let filtered=numbers.filter(value=>value>=0);

//let items=filtered.map(function(num){
//    return {value:num};
//    });

  //change in arrow
let items=filtered.map(num=>{value:num});  
console.log(items);
*/


/*
//13...chaning method
let numbers=[1,2,-6,-5];
let items= numbers
           .filter(value=>value>=0)
           .map(num=>{value:num});
console.log(items);
*/


//14....reducing array


