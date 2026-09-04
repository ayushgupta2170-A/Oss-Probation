const countValue=document.querySelector('#counter');//agr # na use kre toh getElementById use kr skte hai instead of querselector

const increment=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);//parseInt na use kre toh string ki form mein store hoga
    //update the value
    value=value+1;
    //set thevalue on UI
    countValue.innerText=value;
};

const decrement=()=>{
    //get the value from UI
    let value=parseInt(countValue.innerText);
    //update the value
    value=value-1;
    //set thevalue on UI
    countValue.innerText=value;

};