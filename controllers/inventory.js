const express = require('express');
const router = express.Router();
const { getCars, updateCarAvailability } = require('../services/dataService');

router.get('/cars', async (req, res) => {
  try {
    const cars = await getCars();
    res.json(cars);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to retrieve cars' });
  }
});

router.put('/cars/:carId', async (req, res) => {
  try {
    const carId = req.params.carId;
    const isAvailable = req.body.available;
    await updateCarAvailability(carId, isAvailable);
    res.json({ message: `Car ${carId} availability updated to ${isAvailable}` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update car availability' });
  }
});

module.exports = router;