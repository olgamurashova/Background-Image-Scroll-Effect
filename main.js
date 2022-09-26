const backImage = document.getElementById("background-image");

window.addEventListener("scroll", ()=> {
    updateImage()
})

function updateImage(){
    backImage.style.opacity = 1 - window.pageYOffset / 900;
    backImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}