const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            return res.json({
                error:err
            })
        }else{
            const user = new User({
                email:req.body.email,
                password:hash
            })
            user.save()
            .then(result => {
                console.log(result)
                res.json({
                    message:'user created'
                })
            })
            .catch(err =>{
                console.log(err)
                res.json({
                    error:err
                })
            })
        }
    })
    
}

const login = (req, res, next) =>{
    var password = req.body.password
    User.find({ email:req.body.email })
    .exec()
    .then(user =>{
        if(user.length==0) {
            res.json({
                message:'failed to login'
            })
        }
        bcrypt.compare(password, user[0].password, (err, result) => {
            if(err){
                return res.json({
                    message:'failed to login'
                })
            }
            if(result){
                console.log(result)
                const token = jwt.sign(
                    {
                        email: user[0]
                    }, 
                    'kjfngvldf',
                    { 
                        expiresIn:"1h"
                    })
                return res.json({
                    message:'login successfully',
                    token:token
                })
            }
            res.json({
                message:'failed to login'
            })
        })
    })
    .catch(err => {
        console.log(err)
        res.json({
            error:err
        })
    })
}


module.exports = {
    register,
    login
}