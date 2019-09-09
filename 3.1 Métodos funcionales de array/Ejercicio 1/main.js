"use strict";
const marks = [5, 4, 6, 7, 9];
const addMarks = function(a) {
  a++;
  return a;
};
const inflatedMarks = marks.map(addMarks);

console.log(inflatedMarks);
