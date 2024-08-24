const fs = require('fs');
const path = require('path');

let cars = [];

const loadCars = () => {
  const carsData = fs.readFileSync(path.join(__dirname, '../data/cars.json'));
  cars = JSON.parse(carsData);
};

loadCars();

const getCars = () => {
  return cars;
};

const updateCarAvailability = (carId, isAvailable) => {
  const carIndex = cars.findIndex((car) => car.id === carId);
  if (carIndex !== -1) {
    cars[carIndex].available = isAvailable;
    fs.writeFileSync(path.join(__dirname, '../data/cars.json'), JSON.stringify(cars, null, 2));
  }
};

module.exports = { getCars, updateCarAvailability };