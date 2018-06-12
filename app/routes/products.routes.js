module.exports = function (app) {
    const cors = require('cors');
    const products = require('../controllers/products.controller')
    app.use(cors());
    app.get('/', function (req,res) {
        res.send('Hello world');
    })
    app.get('/api/search/:product/:pageNumber/:nPerPage', products.findAll);
    app.get('/api/:product/count', products.findCount);

}
