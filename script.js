
var crsr=document.querySelector(".cursor");
var blr=document.querySelector("#cursor-blur");
document.addEventListener("mousemove",function(dets){ 
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";
    blr.style.left=dets.x-200+"px";
    blr.style.top=dets.y-200+"px";
})
var h4all = document.querySelectorAll("a");
h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});
gsap.to("#nav",{
backgroundColor:"#000",
duration:0.5,
height:"110px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    start:"top -10%",
    stop:"top -11%",
    scrub:1
}
})
gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:'top -30%',
        end:'top -80%',
        scrub:1
    }
})

const card1=document.querySelector("#card1");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card1);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*25;
    const offsetY= ((y-middleY)/middleY)*25;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}


const card2=document.querySelector("#card2");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card2);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*25;
    const offsetY= ((y-middleY)/middleY)*25;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}
const card3=document.querySelector("#card3");
document.addEventListener("mousemove",(e) => {
    rotateElement(e,card3);
})
function rotateElement(event,element){
    const x=event.clientX;
    const y=event.clientY;

    const middleX= window.innerWidth/2;
    const middleY= window.innerHeight/2;

    const offsetX= ((x-middleX)/middleX)*25;
    const offsetY= ((y-middleY)/middleY)*25;
    
    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
   
}

gsap.from(".aboutus img,.aboutusin", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutus",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".q1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: ".q2",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from(".q2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: ".q2",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
      trigger: "#page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 75%",
      end: "top 70%",
      scrub: 2,
    },
  });