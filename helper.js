const getNewTime = (oldDay, oldHour) =>{
    // Handle Sunday.
    if(oldDay===0){ 
        oldDay = 7;
    }
    let daySinceMon = oldDay-1;
    let hrSinceMon = oldHour + 24*daySinceMon;
    let newDay = ((hrSinceMon / 28) | 0) +1;
    let newHour = hrSinceMon %28;
    return {day: newDay, hr: newHour};
}

export {getNewTime};
