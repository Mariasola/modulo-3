"use strict";
const names = ["María", "Lucía", "Susana", "Rocío", "Inmaculada"];
const hi = function(a) {
  return "Hi " + a;
};
const sayHi = names.map(hi);

console.log(sayHi);
