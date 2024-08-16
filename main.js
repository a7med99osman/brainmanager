let btn = document.querySelector(".jsBtn");
let ul = document.querySelector(".list");

btn.addEventListener ("click" , (e) => {
    
    ul.classList.toggle("hidden");
    ul.classList.toggle("transform");
    e.stopPropagation();
});
document.addEventListener("click" , () =>{
    ul.classList.add("hidden");
    ul.classList.remove("transform");
    
});



