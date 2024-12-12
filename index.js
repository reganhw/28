//https://codepen.io/afarrar/pen/JRaEjP

const showTime = ()=>{
    let date = new Date();
    let dayOfWeek = date.getDay();
    let hr = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59
    let sec = date.getSeconds(); // 0 - 59
    if(dayOfWeek===0){
        dayOfWeek = 7;
    }
    let daysGone = dayOfWeek-1;
    let hoursGone = hr + 24*daysGone;
    let day = (hoursGone / 28) | 0;
    hr = hoursGone %28;

    /*
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    */
    let time = hr + ":" + min + ":" + sec;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}


showTime();