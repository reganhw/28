const changeMode = document.getElementById("changeMode");   // xx hour mode button
const github = document.getElementById("github");           
const calendar = document.getElementById("calendar");       // day x of the week
const clock = document.getElementById("clock");
let mode;       // 14 or 28 hr mode
let timeOut;    // timeout for main()

//=====================================================================================================

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
    if (mode == 14) {
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

    timeOut = setTimeout(main, 1000);   // rerun every 1s
}

//=====================================================================================================

/* Page visited. */
window.onload = () => {
    mode = 28;
    main();
}

/* Github icon clicked. */
github.addEventListener("click", () => {
    window.open('http://github.com/reganhw/28');
}
);

/* xx hour mode button clicked. */
changeMode.addEventListener("click", () =>{
    if(mode==28){
        mode = 14;
        changeMode.textContent = '28 hour mode';
        clock.style.fontSize = '13vw';
    }else{
        mode = 28;
        changeMode.textContent = '14 hour mode';
        clock.style.fontSize = '15vw';
    }
    clearTimeout(timeOut);   // stop current run of main()
    main();                  //restart to make mode-change instant
});
