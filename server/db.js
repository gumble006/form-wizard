const faker = require('faker');

module.exports = () => {
  const data = {
    users: [
      { username: 'greg' },
      { email: 'no@way.com' },
    ],
  };

  // Create fake users
  for (let i = 0; i < 10000; i++) {
    data.users.push({
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }

  return data;
};
