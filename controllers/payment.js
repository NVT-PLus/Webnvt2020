var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var session = require('express-session');
var mongoose = require('mongoose');
var Product = require('../models/product');
var MongoClient = mongodb.MongoClient;
var configHeader = require('../configs/config_Header');

router.use(function timeLog (req, res, next) {
    console.log('\n\t Payment controller - Time: ', Date.now());
    next();
})


module.exports = router;