let ADD = document.getElementById("ADD");
let RESET = document.getElementById("RESET");
let MAIN_DIV = document.querySelector(".MAIN_DIV");

// CREATE A ELEMENT WHICH WILL DISPLAY THE COUNT 
let COUNT_DISPLAY = document.createElement("H1")
MAIN_DIV.appendChild(COUNT_DISPLAY)


let COUNT = 0 || localStorage.getItem("STREAKCOUNT")
COUNT_DISPLAY.textContent = COUNT


// ADD +1 DAT TO THE STREAK 
ADD.addEventListener("click",function(){
    COUNT++ 
    COUNT_DISPLAY.textContent = COUNT
    localStorage.setItem("STREAKCOUNT",COUNT)
})

// RESET THE STREAK
RESET.addEventListener("click",function(){
    COUNT = 0
    COUNT_DISPLAY.textContent = COUNT
    localStorage.removeItem("STREAKCOUNT")
})