let User = require('../models/userModels');

let userList= [];

exports.userList = function(req,res){
    res.render('userlist.ejs',{users : userList})
}