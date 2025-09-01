"use strict";
async function mayFail() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Something went wrong'));
        }, 1000);
    });
}
async function runWithErrorHandling() {
    try {
        const result = await mayFail();
        console.log(result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
    }
}
runWithErrorHandling();
