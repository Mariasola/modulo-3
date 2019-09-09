"use strict";

const times = [56, 9, 45, 28, 35];

const numbers = times.reduce((acc, number) => acc + number);

console.log(numbers / times.length);
