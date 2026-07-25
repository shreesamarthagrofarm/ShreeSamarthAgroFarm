/*==========================================
        SHREE SAMARTH SHETI FARM
        MAIN SCRIPT
==========================================*/





/*==========================================
            LOADER
==========================================*/

window.addEventListener("load",()=>{

    const loader=document.querySelector(".loader");

    loader.classList.add("hide");

});





/*==========================================
          STICKY NAVBAR
==========================================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="#ffffff";

        header.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";



        document.querySelectorAll(".navbar a").forEach(link=>{

            link.style.color="#222";

        });

        document.querySelector(".logo h2").style.color="#2E7D32";

    }

    else{

        header.style.background="transparent";

        header.style.boxShadow="none";



        document.querySelectorAll(".navbar a").forEach(link=>{

            link.style.color="#fff";

        });

        document.querySelector(".logo h2").style.color="#fff";

    }

});





/*==========================================
          MOBILE MENU
==========================================*/

const menuBtn=document.querySelector(".menu-btn");

const nav=document.querySelector(".navbar");

menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("show");



    if(nav.classList.contains("show")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }

    else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});





/*==========================================
      CLOSE MENU AFTER CLICK
==========================================*/

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("show");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});





/*==========================================
        SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();



        const target=document.querySelector(

            this.getAttribute("href")

        );



        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});






/*==========================================
      ACTIVE NAVIGATION
==========================================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current="";



    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;



        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });



    navLinks.forEach(link=>{

        link.classList.remove("active");



        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});





/*==========================================
        HERO BUTTON EFFECT
==========================================*/

const buttons=document.querySelectorAll(".btn");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });



    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});





/*==========================================
        IMAGE HOVER SCALE
==========================================*/

const images=document.querySelectorAll(

".gallery img,.product-card img,.about-image img"

);

images.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transition=".5s";

        image.style.transform="scale(1.08)";

    });



    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});





/*==========================================
        WINDOW RESIZE
==========================================*/

window.addEventListener("resize",()=>{

    if(window.innerWidth>992){

        nav.classList.remove("show");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});





/*==========================================
            END
==========================================*/

/*==================================
      SCROLL PROGRESS BAR
==================================*/

const progressBar=document.getElementById("progress-bar");

window.addEventListener("scroll",()=>{

const totalHeight=

document.documentElement.scrollHeight-window.innerHeight;

const progress=

(window.pageYOffset/totalHeight)*100;

progressBar.style.width=progress+"%";

});





/*==================================
      BACK TO TOP BUTTON
==================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});





/*==================================
        FADE UP EFFECT
==================================*/

const fadeElements=document.querySelectorAll(".fade-up");

const fadeObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

fadeElements.forEach(el=>{

fadeObserver.observe(el);

});





/*==================================
      FLOATING ELEMENTS
==================================*/

document.querySelectorAll(

".service-card,.why-card,.product-card"

).forEach(card=>{

card.classList.add("float");

});





/*==================================
      HEADER IMPROVEMENT
==================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>100){

header.style.padding="0";

}

else{

header.style.padding="";

}

});





/*==================================
        PARALLAX HERO
==================================*/

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

document.querySelector(".hero").style.backgroundPosition=

`center ${scroll*0.5}px`;

});


window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});