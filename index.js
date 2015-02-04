var express = require('express');
var app = express();
var nunjucks = require('nunjucks');
var resolve = require('path').resolve;
var request = require('request');

nunjucks.configure(resolve(__dirname, './views/')).express(app);

app.use('/assets', express.static(__dirname + '/assets'));

app.get('/', function (req, res) {
  res.render('index.html');
});

app.get('/error', function (req, res) {
  res.status(400).json({message: 'nope'});
});

app.get('/download', function (req, res) {
  res.json({link: 'http://localhost:3000/pdf'});
});

app.get('/pdf', function (req, res) {
  res.setHeader('Content-Disposition', 'attachment');
  request('https://s3.amazonaws.com/cloudformation-examples/IntegratingAWSCloudFormationWithPuppet.pdf').pipe(res)
});

app.listen(3000);
console.log('http://localhost:3000');
