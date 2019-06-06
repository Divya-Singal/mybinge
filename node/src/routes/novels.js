const routes= require('express').Router();
var app = require('express')();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });
 

var novelCtrl=require('../components/novels/novelController');

routes.get('/novels/get',novelCtrl.getNovels);
routes.post('/novels/put',jsonParser ,novelCtrl.putNovels);


module.exports= routes;
