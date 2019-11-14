const router = require('express').Router();

const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

router.get('/', restricted, (req, res) => {
    if(req.decodedToken.department.includes('Engineering')) {
        Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.send(err)
        });
    }else {
        res.json({ message: "You don't have the right role to access this information" })
    }
});

module.exports = router
