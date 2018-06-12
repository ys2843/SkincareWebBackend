module.exports = function (app) {
    const products = require('../controllers/products.controller')
    app.use(function (req, res, next) {
        res.append("Access-Control-Allow-Origin", "*");
        res.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Expose-Headers', 'Content-Length');
        res.append('Content-Type', 'application/json');
        next();
    });
    app.get('/api/search/:product/:pageNumber/:nPerPage', products.findAll);
    app.get('/api/:product/count', products.findCount);

}
