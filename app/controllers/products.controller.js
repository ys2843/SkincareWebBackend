const product = require('../model/products.model');

exports.findAll = function (req, res) {
    var pageNumber = req.params.pageNumber;
    const nPerPage = 60;
    var re = new RegExp(req.params.product, "i")
    var pro = {
        "$or": [{'name': re}, {'brand': re}]
    };
    product.find(pro)
        .skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage) : 0)
        .limit(nPerPage)
        .exec(function (err, product) {
            if (err) {
                console.log(err)
                return res.status(500).send({message: "Error Retrieving Products with " + req.param.product})
            }
            if (!product) {
                return res.status(404).send({message: "Note not found with " + req.param.product});
            }
            res.json(product)
        })
}

exports.findCount = function (req, res) {

    var re = new RegExp(req.params.product, "i")
    var pro = {
        "$or": [{'name': re}, {'brand': re}]
    };
    product.count(pro, function (err, c) {
        console.log(c)
        res.send({count: c})
    })
}
