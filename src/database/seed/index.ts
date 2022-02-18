const path = require('path');
const { Seeder } = require('mongo-seeding');
const mongoose = require('mongoose');
require('dotenv').config();

const config = {
  database: process.env.NODE_ENV == 'test' ? process.env.CONNECTION_URL_TEST : process.env.CONNECTION_URL_DEV,
  dropDatabase: false,
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(path.resolve('./data'), {
  extensions: ['ts'],
  transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
});

const main = async () => {
  try {
    await mongoose.connection.dropDatabase();
    await mongoose.createConnection(config.database, { useNewUrlParser: true });
    await seeder.import(collections);
    
    console.log('Seed complete!');
    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

mongoose.connect(config.database, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.once('open', async () => {
  console.log('Connected to: ' + config.database);
  main();
});
