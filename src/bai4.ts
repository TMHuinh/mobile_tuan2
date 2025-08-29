function getRandomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        setTimeout(() => {
            if (random > 0.2) {
                resolve(random);
            } else {
                reject(new Error("Random number too low"));
            }
        }, 1000);
    });
}

getRandomNumber().then((number) => {
    console.log("Random number:", number);
}).catch((error) => {
    console.error("Error:", error.message);
});