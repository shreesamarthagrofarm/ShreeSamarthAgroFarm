/*==========================================
        GALLERY LIGHTBOX
==========================================*/

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeBtn=document.querySelector(".close-lightbox");

const prevBtn=document.querySelector(".prev");

const nextBtn=document.querySelector(".next");

let currentIndex=0;

function openLightbox(index){

    currentIndex=index;

    lightboxImage.src=galleryImages[currentIndex].src;

    lightbox.classList.add("active");

    document.body.style.overflow="hidden";

}

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openLightbox(index);

    });

});

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow="auto";

}

closeBtn.addEventListener("click",closeLightbox);

function showNext(){

    currentIndex=(currentIndex+1)%galleryImages.length;

    lightboxImage.src=galleryImages[currentIndex].src;

}

function showPrev(){

    currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length;

    lightboxImage.src=galleryImages[currentIndex].src;

}

nextBtn.addEventListener("click",showNext);

prevBtn.addEventListener("click",showPrev);

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("active")) return;

    if(e.key==="Escape") closeLightbox();

    if(e.key==="ArrowRight") showNext();

    if(e.key==="ArrowLeft") showPrev();

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeLightbox();

    }

});