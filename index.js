const changeMode = document.getElementById("changeMode");   // xx hour mode button
const seeCode = document.getElementById("seeCode");         // github icon
const calendar = document.getElementById("calendar");       // day x of the week
const clock = document.getElementById("clock");
let timeOut;

/* Page visited. */
window.onload = () => {
    setMode('28');
    main();
}

/* Github icon clicked. */
seeCode.addEventListener("click", () => {
    window.open('http://github.com/reganhw/28');
}
);

/* xx hour mode button clicked. */
changeMode.addEventListener("click", () =>{
    let mode = sessionStorage.getItem("mode");
    if(mode=='28'){
        setMode('14');
        changeMode.textContent = '28 hour mode';
        clock.style.fontSize = '13vw';
    }else{
        setMode('28');
        changeMode.textContent = '14 hour mode';
        clock.style.fontSize = '15vw';
    }
    clearTimeout(timeOut);
    main();
});

/* Sets session variable "mode". */
const setMode = (n) => {
    sessionStorage.setItem("mode", n);
}

/* Calculates the day of the week and hour. */
const getNewTime = (oldDay, oldHour) => {
    oldDay = (oldDay == 0) ? 7 : oldDay;   // handle Sunday
    let daySinceMon = oldDay - 1;
    let hrSinceMon = oldHour + 24 * daySinceMon;
    let newDay = ((hrSinceMon / 28) | 0) + 1;
    let newHour = hrSinceMon % 28;
    return { day: newDay, hr: newHour };
}

/* Adds 0 in front of a single-digit number. */
const format = (n) => {
    if (n < 10) {
        return "0" + String(n);
    }
    return String(n);
}

/* Generates time string to be printed. */
const timeStr = (hr, min, sec) => {
    let mode = sessionStorage.getItem("mode");
    if (mode == '14') {
        let mer;
        if (hr > 14) {
            hr = hr - 14;
            mer = "PM";
        } else {
            mer = "AM";
        }
        time = format(hr) + ":" + format(min) + ":" + format(sec) + mer;
    } else {
        time = format(hr) + ":" + format(min) + ":" + format(sec);
    }
    return time;
}

/* Displays day of the week and time. */
const main = () => {
    let date = new Date();
    let oldDay = date.getDay();
    let oldHour = date.getHours();
    let { day, hr } = getNewTime(oldDay, oldHour);
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = timeStr(hr, min, sec);

    calendar.textContent = `Day ${day} of the week`;
    clock.textContent = time;

    timeOut = setTimeout(main, 1000);
}

