const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental');
const path = require('path');

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings');

mongoose
  .connect(
    config.DB_URI,
    { useNewUrlParser: true }
  )
  .then(() => {
    if (process.env.NODE_ENV !== 'production') {
      const fakeDb = new FakeDb();
      // fakeDb.seeDb();
    }
  });

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

if (process.env.NODE_ENV === 'production') {
  const appPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(appPath));

  app.get('*', function(req, res) {
    res.sendFile(path.resolve(appPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(3001, function() {
  console.log('I am running rentals.js');
});
