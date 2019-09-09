"use strict";
class Polygon {
  constructor(base, height, numberOfSides) {
    this.base = base;
    this.height = height;
    this.numberOfSides = numberOfSides;
  }
  perimeter() {
    return this.base * this.numberOfSides;
  }
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    super(side, side, 4);
    this.side = side;
  }
}

class Triangle extends Polygon {
  constructor(sides, base) {
    super(base, sides, 3);
    this.sides = sides;
    this.base = base;
  }
  area() {
    return super.area() / 2;
  }
}

const cuadradito = new Square(4);
const triangulito = new Triangle(3, 4);

console.log("New square perimeter:" + cuadradito.perimeter());
console.log(cuadradito.area());

console.log(triangulito.perimeter());
console.log(triangulito.area());

const poligonito = new Polygon(4, 5, 7);

console.log(poligonito.perimeter());
