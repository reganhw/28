//https://codepen.io/afarrar/pen/JRaEjP
import { getNewTime } from './helper.js';

const showTime = ()=>{
    let date = new Date();
    let oldDay = date.getDay();
    let oldHour = date.getHours(); // 0 - 23
    let {day,hr} = getNewTime(oldDay, oldHour);
    let min = date.getMinutes(); // 0 - 59
    let sec = date.getSeconds(); // 0 - 59

    let time = hr + ":" + min + ":" + sec;
    //document.getElementById("clock").innerText = time;
    document.getElementById("day").textContent = `Day ${day} of the week`
    document.getElementById("clock").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();