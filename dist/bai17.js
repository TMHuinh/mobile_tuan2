"use strict";
async function task17(name, time) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`Task ${name} done`), time);
    });
}
async function runTasks() {
    const tasks = [task17('A', 1000), task17('B', 500), task17('C', 1500)];
    for await (const result of tasks) {
        console.log(result);
    }
}
run();
