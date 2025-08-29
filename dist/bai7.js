"use strict";
function task(time, name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} done after ${time}ms`);
        }, time);
    });
}
Promise.race([
    task(3000, "Task 1"),
    task(1000, "Task 2"),
    task(2000, "Task 3"),
])
    .then((result) => {
    console.log("First resolved:", result);
});
