const express = require('express');
const router = express.Router();
const { getCars, updateCarAvailability } = require('../services/dataService');

router.get('/cars', async (req, res) => {
  try {
    const cars = await getCars();
    res.status(200).json(cars);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve cars' });
  }
});

router.put('/cars/:carId', async (req, res) => {
  try {
    const carId = req.params.carId;
    const isAvailable = req.body.available;
    await updateCarAvailability(carId, isAvailable);
    res.status(200).json({ message: `Car with id ${carId} availability updated` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update car availability' });
  }
});

module.exports = { checkoutRouter: router };