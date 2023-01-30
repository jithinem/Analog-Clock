let hour=document.getElementById("hour");
let minute=document.getElementById("minute");
let seconds=document.getElementById("seconds");

let clock=setInterval(()=>{
    let date=new Date();

    let hr=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let c_hr=(hr*30)+(min/2);
    let c_min=(min*6)+(sec/10);
    let c_sec=sec*6;

    hour.style.transform=`rotate(${c_hr}deg)`;
    minute.style.transform=`rotate(${c_min}deg)`;
    seconds.style.transform=`rotate(${c_sec}deg)`;
},1000)