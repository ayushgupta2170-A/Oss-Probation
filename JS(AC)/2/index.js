let todo=[];
let req=prompt("please enter your task");

while(true){
    if(req=='quit'){
        console.log("quiting the app");
        break;
    }

    if(req=="list"){
        console.log("__________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("__________");
    }else if(req=="add"){
        let task=prompt("please enter whatever u want to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx=prompt("please enter whatever u want to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("wrong request");
    }

    req=prompt(" please enter your request");

}

console.log(req);