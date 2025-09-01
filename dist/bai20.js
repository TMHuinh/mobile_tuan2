"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai18_1 = require("./bai18");
async function fetchUserWithTimeout(id, timeout = 2000) {
    const userPromise = (0, bai18_1.fetchUser)(id);
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Timeout: API call took too long'));
        }, timeout);
    });
    return Promise.race([userPromise, timeoutPromise]);
}
(async () => {
    try {
        const user = await fetchUserWithTimeout(5, 2000);
        console.log('Câu 20:', user);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Câu 20 - Error:', error.message);
        }
    }
})();
