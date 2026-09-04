const fs=require("fs");//fs ek module hai

//synchr vala return krta hai butt asynchr vala nhi
fs.writeFileSync("./test.txt","Hey there");

//asynchr
fs.writeFile("./test.txt","Hey there async",(err)=>{});//call back fx likhna pdta hai

         //read file 
//synch=blocking....
const result=fs.readFileSync ("./contacts.txt","utf-8");
console.log("synch=>",result);

//asynchr ke liiye ye sb=non blocking
fs.readFile("./contacts.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err);
    }else{
       console.log("asynch=>",result); 
    }
})

fs.appendFileSync(".test.txt",`${Date.now()} hey there i am ayush\n`);

//fs.cpSync(".test.txt","./copy.txt");//file ko bnanae ka trika

//fs.unlinkSync("./copy.txt");//file delete krna

console.log(fs.fstatSync('./test.txt'));

const os= require("os");
console.log(os.cpus().length);
