module.exports = function (app) {
    const products = require('../controllers/products.controller')

    app.get('/api/search/:product', products.findAll);

}