module.exports = function (app) {
    const products = require('../controllers/products.controller')
    const users = require('../controllers/users.controller')
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        next();
    });
    app.get('/api/search/:product/:pageNumber', products.findAll);
    app.get('/api/:product/count', products.findCount);
    app.post('/api/signup', )
}
