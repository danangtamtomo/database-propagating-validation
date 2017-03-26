const User = require('../models/User')
const jwt = require('jsonwebtoken')

class UserController {
    constructor() {

    }

    logout(req, res) {
        
    }

    getRegister(req, res) {
        res.render('register', {errorStack: [
            {
                message: ''
            }
        ]})
    }

    registerUser(req, res) {
        var user = new User(req.body) 
        user.save() 
            .then((user) => {
                req.session.successRegistration = user.name + ' registration is success.'
                res.render('register', {errorStack: [
            {
                message: 'Success register ' + user.name
            }
        ]})
            })
            .catch((err) => {
                let errorStack = []
                Object.keys(err.errors).forEach((errorField) => {
                    let errObj = err.errors[errorField]
                    errorStack.push(errObj)
                })
                res.render('register', {errorStack: errorStack})
            })
        }
}

module.exports = new UserController