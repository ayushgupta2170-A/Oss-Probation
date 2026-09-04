const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//modal open fx
const openModal=()=>{
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Modal cloe function
const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};