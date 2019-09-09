"use strict";
class Square {
  perimeter(side = 9) {
    console.log(side * 4);
  }
  area(side = 9) {
    console.log(side * side);
  }
}

const math = new Square();

math.perimeter();
math.area();
