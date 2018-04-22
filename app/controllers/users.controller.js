const users = require('../model/users.model');
const fs = require('fs')

exports.signUp = function (req, res) {
    if (req.body.password !== req.body.repassword) {
        res.status(400).json({sucess: false, msg: 'Passwords do not match'});
        return;
    }
    var user = new user({
        name: req.body.name,
        password: req.body.password,
        username: req.body.username
    });
    users.save(function (err) {
            if (err) {
                if (err.errors.name) {
                    res.status(400).json({success: false, msg: err.errors.name.message});
                    return;
                }
                if (err.errors.username) {
                    res.status(400).json({success: false, msg: err.errors.username.message});
                    return;
                }
            } else {
                res.json({success: true, msg: 'User successfully registered'})
            }
        }
    )
}
