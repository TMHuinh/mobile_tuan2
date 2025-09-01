"use strict";
async function fakeApi(url, success) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve(`Success from ${url}`) : reject(`Error from ${url}`);
        }, Math.random() * 2000);
    });
}
async function runAllSettled() {
    const tasks = [
        fakeApi('api/1', true),
        fakeApi('api/2', false),
        fakeApi('api/3', true),
    ];
    const results = await Promise.allSettled(tasks);
    console.log('AllSettled results:', results);
}
runAllSettled();
