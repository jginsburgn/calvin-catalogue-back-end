const mongodb = require('mongodb');

const { models } = require('../models/models');

function initializeDatabase(atlan, app) {
  mongodb.MongoClient.connect(process.env.MONGO_URL, (err, client) => {
    let db = client.db('calvin');
    atlan.driver(err, db);
    models(atlan, app, db);
  });
}

module.exports = { initializeDatabase };
