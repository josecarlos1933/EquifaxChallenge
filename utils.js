const request = require('request')
const utils = {
  getRequest : function(issueKey,cb){
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    request.get(`http://localhost:8080/rest/api/2/issue/${issueKey}`,function(error,response){
      cb(response)
    });
  }
}

module.exports=utils
