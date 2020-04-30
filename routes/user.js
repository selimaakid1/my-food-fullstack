const express = require('express')
const router = express.Router()

const { check, validationResult } = require('express-validator');
const User = require('../model/User')
router.post('/', [
    check('FirstName', 'Please enter your FirstName').not().isEmpty(),
    check('LastName', 'Please enter your LasttName').not().isEmpty(),
    check('Email', 'Please enter your Email').isEmail(),
    check('PassWord', 'Password must be 6 or more characters').not().isEmpty().isLength({ min: 6 }),
    check('Adress', 'Please enter your FirstName').not().isEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() })
    }
    const { FirstName, LastName, Email, PassWord,Adress} = req.body
    User.findOne({ Email })
        .then(user => {
            if (user) {
                res.json({ msg: 'User already exists!!' })
            } else {
                user = new User({
                    FirstName,
                    LastName,
                    PassWord,
                    Adress,
                    Email
                    
                })
                user.save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err.message))
            }
        })
})

module.exports = router 
