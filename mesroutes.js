const { application } = require('express');
let express = require('express');
let router = express.Router();

tNames = [{
    name:'JAVA',
    prix:'200',
    debut:'06-12-2022',
    end:'07-12-2021'
},{
    name:'C#',
    prix:'100',
    debut:'07-12-2022',
    end:'08-12-2021'
}]

router.get('/',(req,res) => {
    res.render('home.ejs', {tNames: tNames});
});

router.post('/',(req,res) =>{
    console.log(req.body);
    res.send('hello' +req.body.myname);
});

module.exports = router;