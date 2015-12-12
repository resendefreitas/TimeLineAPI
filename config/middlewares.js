var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');

var middlewares = function(app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(function enableCors(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Methods", "GET, POST")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

  app.use(function setContentType(req, res, next) {
    res.header('Content-Type', 'application/json')
    next()
  })

}

module.exports = middlewares
