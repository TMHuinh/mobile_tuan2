"use strict";
function simulateTaskAll(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // resolve(`Task after ${time}ms`);
            resolve("Task after " + time);
        }, time);
    });
}
Promise.all([
    simulateTaskAll(1000),
    simulateTaskAll(1500),
    simulateTaskAll(2000),
]).then((results) => {
    console.log("All tasks done:");
    console.log(results);
});
