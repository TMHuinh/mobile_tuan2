"use strict";
function throwErrorAsync() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}
throwErrorAsync()
    .then(() => {
})
    .catch((err) => {
    console.error(err.message);
});
