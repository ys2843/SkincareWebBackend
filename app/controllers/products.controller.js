const product = require('../model/products.model');

exports.findAll = function (req, res) {
    var lazyCount = req.params.lazyLoadCount;
    var pageNumber = req.params.pageNumber;
    const nPerLoad = 24;
    const nPerPage = 60;
    var re = new RegExp(req.params.product, "i")
    console.log('layzCount: ' + lazyCount + '  pageNumber: ' + pageNumber)
    var pro = {
        "$or": [{'name': re}, {'brand': re}]
    };
    product.find(pro)
        .skip(pageNumber > 0 ? ((pageNumber - 1) * nPerPage + nPerLoad * lazyCount) : 0)
        .limit(nPerLoad)
        .exec(function (err, product) {
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
