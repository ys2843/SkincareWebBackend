module.exports = function (app) {
    const products = require('../controllers/products.controller')
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header('Content-Type', 'application/json');
        next();
    });
    app.get('/api/search/:product/:pageNumber/:nPerPage', products.findAll);
    app.get('/api/:product/count', products.findCount);

}
