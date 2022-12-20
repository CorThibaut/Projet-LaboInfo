let Formation = require('../models/formationModels');

let JAVA = new Formation('JAVA', '200','06-12-2022', '07-12-2021');
let Csharp = new Formation('C#','100','07-12-2022','08-12-2021');

formList = [JAVA, Csharp];
inscri = [];


exports.formList = function(req,res){
    res.render('home.ejs',{tNames : formList});
}

exports.formInscri = function(req,res){
    let i = req.params.i;
    inscri.push(formList[i]);
    formList.splice(i,1);
    res.redirect('/home');
}

exports.formPanier = function(req,res){
    res.render('panier.ejs', {tNames: inscri});
}

exports.formDInscri = function(req,res){
    let i = req.params.i;
    formList.push(inscri[i]);
    inscri.splice(i,1);
    res.redirect('/panier');
}