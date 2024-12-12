//https://codepen.io/afarrar/pen/JRaEjP

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

const getNewTime = (oldDay, oldHour) =>{
    // Handle Sunday.
    if(oldDay===0){ 
        oldDay = 7;
    }
    let daySinceMon = oldDay-1;
    let hrSinceMon = oldHour + 24*daySinceMon;
    let newDay = (hrSinceMon / 28) | 0 +1;
    let newHour = hrSinceMon %28;
    return {day: newDay, hr: newHour};
}


showTime();

module.exports= {getNewTime};