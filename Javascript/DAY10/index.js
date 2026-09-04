const inputSlider =document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");
const passwordDisplay =document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numbersCheck =document.querySelector("#numbers");
const symbolCheck =document.querySelector("#symbol");
const indicator =document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateButton");
const allCheckBox =document.querySelectorAll("input[type=checkbox]");
const symbols='~`!@#$%^&*(){}[];:<>?/*';

let password="";
let passwordLength=10;
let checkCount=1;
handleSlider();
//set strength circle color to grey

//set passwordLength
function handleSlider(){
    inputSlider.value=passwordLength;
    lengthDisplay.innerText=passwordLength;
    //or kuch bhi add krna chahiye
}

function setIndicator(color){
    indicator.style.backgroundColor=color;
        //shadow
}

function getRndInteger (min,max ){
   return Math.floor(Math.random() *(max-min))+min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbols(){
   const randNum=getRndInteger(0,symbols.length);
   return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper=false;
    let hasLower=false;
    let hasNum=false;
    let hasSym=false;
    if(uppercaseCheck.checked)hasUpper=true;
    if(lowercaseCheck.checked)hasLower=true;
    if(numbersCheck.checked)hasNum=true;
    if(symbolCheck.checked)hasSym=true;

    if(hasUpper && hasLower && (hasNum||hasSym) && passwordLength>=8){
        setIndicator("#0f0");
    }
    else if(
        (hasLower || hasUpper)&&
        (hasNum || hasSym)&&
        passwordLength>=6)
    {
        setIndicator("#ff0");
    }else {
        setIndicator("#f00");
    }
    
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDisplay.value);
         copyMsg.innerText="copied";
    }
    catch(e){
        copyMsg.innerText="failed";
    }

    //copy vala span visible ho jayega
    copyMsg.classList.add("active"); 

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){
    //Fisher Yates Method
    for (let i=array.length-1;i>0;i--){
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements array[i] and array[j] using destructuring assignment
    const temp=array[i];
    array[i]=array[j];
    array[j]=temp;
  }
  let str="";
  array.forEach((el)=>(str+=el));
  return str;

}

function handleCheckBoxChange(){
    checkCount=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
            checkCount++;
    });

    //special condition
    if(passwordLength<checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e)=>{
    passwordLength=e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
        copyContent();
})

//generate password vali line ko banan hai
generateBtn.addEventListener('click',()=>{
     //none of the checkbox selected
     if(checkCount<=0)return;

     if(passwordLength < checkCount){
        passwordLength=checkCount;
        handleSlider();
    }
    //lets start the  journey of finder new password

    //remove old password
    password="";

    //lets put the stuff mentioned by checkbox
    /*
    if(uppercaseCheck.checked){
        password+=generateUpperCase();
    }

    if(lowercaseCheck.checked){
        password+=generateLowerCase();
    }

    if(numberCheck.checked){
        password+=generateRandomNumber();
    }

    if(symbolsCheck.checked){
        password+=generateSymbol();
    }*/

        let funcArr=[];

        if(uppercaseCheck.checked)
            funcArr.push(generateUpperCase);

        if(lowercaseCheck.checked)
            funcArr.push(generateLowerCase);

        if(numbersCheck.checked)
            funcArr.push(generateRandomNumber);

        if(symbolCheck.checked)
            funcArr.push(generateSymbols);
        //compulsory addition
        for(let i=0;i<funcArr.length;i++){
            password+=funcArr[i]();
        }
        //remaining addition
        for(let i=0;i<passwordLength-funcArr.length;i++){
            let randIndex=getRndInteger(0,funcArr.length);
            password+=funcArr[randIndex]();
        }
        //shuffle password ,mtlb koi bhi letters aage piche ho skte hai
        password=shufflePassword(Array.from(password));
        //show in UI
        passwordDisplay.value=password;
        //calaculate the strength
        calcStrength();

});













