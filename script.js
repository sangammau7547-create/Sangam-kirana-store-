// ===============================
// Sangam Kirana & General Store
// script.js
// ===============================

// Sticky Header
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "rgba(255,255,255,.9)";
    }
});

// Scroll To Top Button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0d6efd";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

// Fade Animation
const sections = document.querySelectorAll("section");

function reveal(){

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

if(top < window.innerHeight-100){

section.style.opacity="1";
section.style.transform="translateY(0px)";

}

});

}

sections.forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition=".8s";

});

window.addEventListener("scroll",reveal);

reveal();

// Welcome Message

window.onload=function(){

setTimeout(()=>{

alert("🙏 Welcome to Sangam Kirana & General Store");

},500);

}