import { getNewTime } from "./helper.js";

const theTest = (oldDay, oldHour, expectedDay, expectedHour) =>{
    const {day, hr} = getNewTime(oldDay, oldHour);
    if (expectedDay===day && expectedHour === hr){
        console.log(`PASS for day ${oldDay}, hour ${oldHour}.`);
    }else{
        console.log(`FAIL for day ${oldDay}, hour ${oldHour}. 
            Expected ${expectedDay}, ${expectedHour}.
            Got ${day}, ${hr}.`);
    }
}
const runTest = () =>{
    theTest(1,0,1,0); // Monday 12AM
    theTest(2,0,1,24); // Tuesday 12AM
    theTest(2,4,2,0); // Tuesday 3AM
    theTest(3,7,2,27); // Wednesday 7AM
    theTest(3,8,3,0); // Wednesday 8AM
    theTest(0,23,6,27); // Sunday 11PM
}

runTest();