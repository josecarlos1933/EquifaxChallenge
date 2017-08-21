var  express = require('express');
var  app = express();
var  utils = require('./utils')
var bodyParser = require('body-parser')

app.use(express.static('public'));

app.use(bodyParser());

app.get('/', function (req, res) {
  res.sendfile('./views/index.html')
});

app.post('/ok', function (req, res) {
  console.log(req.body.issuekey)
  utils.getRequest(req.body.issuekey,function(response){
    res.send(response.body)
  });
});

app.listen(3000, function () {
  console.log('Node Server running on port: 3000');
});
