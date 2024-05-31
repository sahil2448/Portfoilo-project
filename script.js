let mode  = document.querySelector("#mode")
let currMode = "light"; //Dark
let body = document.querySelector("body")
mode.addEventListener("click",()=>{

    alert("Working upon it...!")

})
const para = document.createElement("p");
const cnt = document.querySelector(".cnt");
cnt.addEventListener("click", () => {
    para.innerHTML = "follow me by going through the links, present in the form of icons";
    para.style.fontSize = "2vw";
    para.classList.add("fade-in"); // Add class to trigger transition
    document.querySelector(".content").appendChild(para);

    // Wait for the next frame before changing opacity
    requestAnimationFrame(() => {
        para.style.opacity = 1;
    });
});
