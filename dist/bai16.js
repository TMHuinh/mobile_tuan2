"use strict";
function numberX3All(num, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${num} x 3 = ${num * 3}`);
        }, time);
    });
}
async function runAll() {
    var result = await Promise.all([
        numberX3All(5, 1000),
        numberX3All(4, 2000),
        numberX3All(6, 500),
    ]);
    console.log(result);
}
runAll();
