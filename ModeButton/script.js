let mode  = document.querySelector("#mode")
let currMode = "light"; //Dark
let body = document.querySelector("body")
mode.addEventListener("click",()=>{
    // console.log("you are trying to change the mode");
    // if(currMode === "light"){
    //     currMode = "dark"
    //     document.querySelector("body").style.background = "black"
    // }
    // else{
    //     currMode = "light";
    //     document.querySelector("body").style.background = "white"
    // }
    // console.log(currMode)
    if(currMode === "light"){
        currMode = "dark"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currMode = "light"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(currMode)
})