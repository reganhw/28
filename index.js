//https://codepen.io/afarrar/pen/JRaEjP
window.onload = () => {
    setBase(28);
    showTime();
}

const btn14 = document.getElementById("btn14");
const btn28 = document.getElementById("btn28");
const seeCode = document.getElementById("seeCode");

btn14.addEventListener("click", () => {
    setBase(14);
    clearTimeout(timeOut);
    showTime();
    btn14.style.display = "none";
    btn28.style.display = "block";
});

btn28.addEventListener("click", () => {
    setBase(28);
    clearTimeout(timeOut);
    showTime();
    btn28.style.display = "none";
    btn14.style.display = "block";
});

seeCode.addEventListener("click", () => {
    window.open('http://github.com/reganhw/28');
}
);

/* Sets session variable "base". */
const setBase = (n) => {
    sessionStorage.setItem("base", n);
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
    let base = sessionStorage.getItem("base");
    if (base == '14') {
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
const showTime = () => {
    let date = new Date();
    let oldDay = date.getDay();
    let oldHour = date.getHours();
    let { day, hr } = getNewTime(oldDay, oldHour);
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = timeStr(hr, min, sec);

    document.getElementById("day").textContent = `Day ${day} of the week`;
    document.getElementById("clock").textContent = time;

    timeOut = setTimeout(showTime, 1000);
}

