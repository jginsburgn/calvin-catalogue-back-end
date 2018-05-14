const user = require('./user/user.atlan');
const vehicle = require('./vehicle/vehicle.atlan');
const promo = require('./promo/promo.atlan');

function models(atlan, app, db) {
  atlan.model([
    ['user', user(db)],
    ['vehicle', vehicle(db)],
    ['promo', promo(db)]
  ]);
}

module.exports = { models };
