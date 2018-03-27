const product = require('../model/products.model');

exports.findAll = function (req, res) {
    var re = new RegExp(req.params.product, "i")
    console.log(re)
    var pro = {
        "$or": [{'name': re}, {'brand': re}]
    };

    product.find(pro, function (err, product) {
        if (err) {
            console.log(err)
            return res.status(500).send({message: "Error Retrieving Products with " + req.param.product})
        }
        if (!product) {
            return res.status(404).send({message: "Note not found with " + req.param.product});
        }

        res.send(product)
    })
}
