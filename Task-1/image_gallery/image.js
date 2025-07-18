let currentIndex = 0;
let images = [];

function openLightbox(clickedImg){
    images=Array.from(document.querySelectorAll(".gallery-item img"));
    currentIndex = images.indexOf(clickedImg);

    document.getElementById("lightboxImg").src = clickedImg.src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightboxImg").src = images[currentIndex].src;
}

function prevImage(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightboxImg").src = images[currentIndex].src;
}

function filterImages(category){
    let items = document.querySelectorAll(".gallery-item");
    items.forEach(item => {
        if(category === "all" || item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}