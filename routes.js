const express = require('express');
const checkoutRouter = require('./controllers/checkout');
const inventoryRouter = require('./controllers/inventory');

const router = express.Router();

router.use('/checkout', checkoutRouter);
router.use('/inventory', inventoryRouter);

module.exports = router;