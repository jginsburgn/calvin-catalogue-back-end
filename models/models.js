const user = require('./user/user.atlan');
const store = require('./store/store.atlan');
const category = require('./category/category.atlan');
const product = require('./product/product.atlan');
const sale = require('./sale/sale.atlan');

function models(atlan, app, db) {
  atlan.model([
    ['user', user(db)],
    ['store', store(db)],
    ['category', category(db)],
    ['product', product(db)],
    ['sale', sale(db)]
  ]);
}

module.exports = { models };
