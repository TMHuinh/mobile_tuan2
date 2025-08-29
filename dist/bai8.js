"use strict";
Promise.resolve(5)
    .then((num) => num * num)
    .then((squa) => squa * 2)
    .then((doubled) => doubled + 5)
    .then((result) => console.log(result));
