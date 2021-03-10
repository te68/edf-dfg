module.exports = function () {
  const faker = require("faker");
  const lodash = require("lodash");
  const moment = require("moment");
  return {
    events: lodash.times(30, (n) => {
      return {
        _id: faker.random.uuid(),
        title: faker.lorem.sentence(),
        date:
          n % 2 === 0 ? moment(faker.date.future()) : moment(faker.date.past()),
        description: faker.lorem.paragraph(),
        time: "10 - 2 pm PST",
        address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`,
        categories: Array(5)
          .fill(null)
          .map((c) => (c = faker.lorem.word())),
      };
    }),
    articles: lodash.times(30, (n) => {
      return {
        id: n + 1,
        title: faker.lorem.sentence(),
        author: faker.name.findName(),
        previewText: faker.lorem.paragraph(),
        likes: faker.random.number(),
        celebrates: faker.random.number(),
        dislikes: faker.random.number(),
        angrys: faker.random.number(),
        previewImage: faker.image.imageUrl(),
        url: faker.internet.url(),
      };
    }),
  };
};
