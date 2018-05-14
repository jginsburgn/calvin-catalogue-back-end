const mongodb = require('mongodb');

const { models } = require('../models/models');

function initializeDatabase(atlan, app) {
  mongodb.MongoClient.connect(process.env.MONGO_URL, (err, db) => {
    atlan.driver(err, db);
    models(atlan, app, db);
  });
}

module.exports = { initializeDatabase };
