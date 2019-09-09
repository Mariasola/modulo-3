"use strict";
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const barbara = new Person("Bárbara", "Chaves");
const maria = new Person("María", "Sola");

console.log("Hi" + `${barbara.firstName} ${barbara.lastName}`);
console.log("Hi" + `${maria.firstName} ${maria.lastName}`);
console.log(maria.fullName);
