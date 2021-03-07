module.exports = function () {
  const faker = require("faker");
  const lodash = require("lodash");
  const moment = require("moment");
  return {
    events: lodash.times(30, (n) => {
      return {
        id: n + 1,
        title: faker.company.catchPhrase(),
        date:
          n % 2 === 0
            ? moment(faker.date.future()).format("LL")
            : moment(faker.date.past()).format("LL"),
        address: faker.address.streetAddress(),
        location: faker.company.companyName(),
        description: faker.lorem.paragraph(),
        time: faker.time.recent(),
      };
    }),
    articles: lodash.times(30, (n) => {
      return {
        id: n + 1,
        title: faker.company.catchPhrase(),
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
