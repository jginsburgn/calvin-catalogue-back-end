const user = require('./user/user.atlan');
const store = require('./store/store.atlan');
const category = require('./category/category.atlan');
const product = require('./product/product.atlan');
const sales = require('./sales/sales.atlan');

function models(atlan, app, db) {
  atlan.model([
    ['user', user(db)],
    ['store', store(db)],
    ['category', category(db)],
    ['product', product(db)],
    ['sales', sales(db)]
  ]);
}

module.exports = { models };
