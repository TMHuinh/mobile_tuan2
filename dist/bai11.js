"use strict";
function delayHelloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
async function run() {
    var mess = await delayHelloAsync();
    console.log(mess);
}
run();
