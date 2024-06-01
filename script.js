let mode  = document.querySelector("#mode")
let currMode = "light"; //Dark
let body = document.querySelector("body")
// let handle1 = document.querySelector("#insta")
// let handle2 = document.querySelector("#ln")
// let handle3 = document.querySelector("#fb")
// let handle4 = document.querySelector("#tw")
// handle1.style.opacity = 0;
// handle2.style.opacity = 0;
// handle3.style.opacity = 0;
// handle4.style.opacity = 0;
mode.addEventListener("click",()=>{

    alert("Work in progress. will be available soon...!")

})
const para = document.createElement("p");
const cnt = document.querySelector(".cnt");
cnt.addEventListener("click", () => {
    para.innerHTML = "<b><i>Click icons to land up on their respective page...!</i></b>";
    // para.style.fontSize = "1vw";
    para.classList.add("fade-in"); // Add class to trigger transition
    document.querySelector(".content").appendChild(para);
    // Wait for the next frame before changing opacity
    requestAnimationFrame(() => {
        para.style.opacity = 1;
        // handle1.style.opacity = 1;
        // handle2.style.opacity = 1;
        // handle3.style.opacity = 1;
        // handle4.style.opacity = 1;
    });
});

