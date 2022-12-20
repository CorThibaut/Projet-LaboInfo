const { application } = require('express');
let express = require('express');
let router = express.Router();

let formationController = require('./controller/formationController.js')

router.get('/',(req,res) => {
    res.redirect('/home');
});

router.get('/home', formationController.formList);

router.get('/home/:i',formationController.formInscri);

router.get('/panier',formationController.formPanier);

router.get('/panier/:i',formationController.formDInscri);

router.get('/connect',(req,res) => {
    //variable ejs à rajouter: value="<%= pseudo %> "
    
    res.render('connect.ejs');
});

router.post('/connect',(req,res) =>{
    res.redirect('/');
});


module.exports = router;
