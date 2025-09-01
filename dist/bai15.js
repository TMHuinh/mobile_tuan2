"use strict";
function numberX3Sequential(num, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${num} x 3 = ${num * 3}`);
        }, time);
    });
}
async function runSequential() {
    var result = await numberX3Sequential(5, 1000);
    console.log('Task 1: ' + result);
    var result = await numberX3Sequential(4, 2000);
    console.log('Task 2: ' + result);
    var result = await numberX3Sequential(6, 1000);
    console.log('Task 3: ' + result);
}
runSequential();
