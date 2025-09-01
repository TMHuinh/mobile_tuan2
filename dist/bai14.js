"use strict";
function numberX3(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num * 3);
        }, 1000);
    });
}
async function runNumberX3(num) {
    var result = await numberX3(num);
    console.log('Sau khi nhan 3: ' + result);
}
runNumberX3(3);
