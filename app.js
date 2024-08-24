const express = require('express');
const app = express();
const { checkoutRouter } = require('./controllers/checkout.js');
const { inventoryRouter } = require('./controllers/inventory.js');
const { getCars, updateCarAvailability } = require('./services/dataService.js');

app.use(express.json());

app.use('/checkout', checkoutRouter);
app.use('/inventory', inventoryRouter);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});