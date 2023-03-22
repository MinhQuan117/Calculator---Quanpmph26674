const express = require('express');
const expressHbs = require('express-handlebars');
const { helpers } = require('handlebars');
var cal = require('./Calculator');

const app = express();

app.engine('hbs', expressHbs.engine({extname: "hbs", defaultLayout: 'main', layoutsDir: "views/layouts/"}));    
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        // showContentMayTinh: false,
        layout: 'main',
        
        helpers:{
            foo() {return 'foo. CP17305 - server Android';}
        }
    });

});

app.get('/maytinh', function(req, res){

    const number1 = Number(req.query.number1);
    const number2 = Number(req.query.number2);
    const operator = req.query.operator;

    switch (operator) {
        case "cong":
          res.render('home', {ketqua: number1 + number2 } )
          break;
        case "tru":
            res.render('home', {ketqua: number1 - number2 } )
          break;
        case "nhan":
            res.render('home', {ketqua: number1 * number2 } )
          break;
        case "chia":
            res.render('home', {ketqua: number1 / number2 } )
          break;
      }
})



app.listen(3000);