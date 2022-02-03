const { User } = require('../models');

const userData = [{
    username: "123",
    email: "123@random.com",
    password: "1234"
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;