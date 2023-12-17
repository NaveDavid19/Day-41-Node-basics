import ms from 'ms';
import fs from 'fs';

function printTime() {
    const timeStemp = fs.readFileSync('data.txt', 'utf8').split("\r\n")

    timeStemp.forEach(time => {
        const formattedTime = ms(+time, { long: true });
        console.log(formattedTime);
    });
}

printTime();


