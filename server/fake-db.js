const Rental = require('./models/rental');
const User = require('./models/user');
const Booking = require('./models/booking');

const fakeDbData = require('./data.json');

class FakeDb {
  constructor() {
    this.rentals = fakeDbData.rentals;
    this.users = fakeDbData.users;
  }

  async cleanDb() {
    // await Rental.remove({});
    await User.deleteMany({});
    await Rental.deleteMany({});
    await Booking.deleteMany({});
  }

  pushDataToDb() {
    const user = new User(this.users[0]);

    this.rentals.forEach(rental => {
      const newRental = new Rental(rental);
      newRental.user = user;

      user.rentals.push(newRental);

      newRental.save();
    });
    user.save();
  }
  async seeDb() {
    await this.cleanDb();
    this.pushDataToDb();
  }
}
module.exports = FakeDb;
