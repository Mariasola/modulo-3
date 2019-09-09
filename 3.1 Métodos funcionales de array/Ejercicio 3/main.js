"use strict";
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false }
];
const hi = function(a) {
  if (a.isPremium === true) {
    return "Bienvenida " + a.name + ".Gracias por confiar en nosotros.";
  } else {
    return "Bienvenida " + a.name;
  }
};
const sayHi = users.map(hi);

console.log(sayHi);
