"use strict";

class JSCars {
  constructor (wheels, topspeed, color) {
    this.wheels = wheels;
    this.topspeed = topspeed;
    this.color = color
  }

  quarter (topspeed) {
    return 'quarter mile speed is ' + (0.25 / topspeed * 3600) + ' seconds';
  }
}

let car1 = new JSCars(2, 150, 'blue');
let car2 = new JSCars(6, 300, 'red');

console.log(car1);
console.log(car1.quarter(car1.topspeed));
console.log(car2);
console.log(car2.quarter(car2.topspeed));
