/*==================================
        COUNTER
==================================*/

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/150;

function update(){

count+=speed;

if(count<target){

counter.innerHTML=Math.ceil(count);

requestAnimationFrame(update);

}

else{

counter.innerHTML=target+"+";

}

}

update();

});

counterObserver.disconnect();

}

});

});

counterObserver.observe(document.querySelector(".stats"));