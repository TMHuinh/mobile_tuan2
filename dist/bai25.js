"use strict";
function downloadFile(filename) {
    return new Promise((resolve) => {
        console.log(`Bắt đầu tải ${filename}...`);
        setTimeout(() => {
            console.log(`${filename} đã tải xong!`);
            resolve();
        }, 3000);
    });
}
