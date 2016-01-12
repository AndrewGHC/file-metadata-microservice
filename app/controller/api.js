var accepts = require('accepts');
var os = require('os');
var useragent = require('useragent');

module.exports = function(req) {
    
    var accept = accepts(req);
    var agent  = useragent.parse(req.headers['user-agent']);
    
    // Store ip, language and operating system
    
    var ip   = req.header('x-forwarded-for'),
        lan  = accept.languages()[0],
        soft = agent.os.toString();
        //soft = req.headers['user-agent'];
    
    // Place in JSON object and return
    
    var jsonInfo = {
        ipaddress:ip,
        language:lan,
        software:soft
    };
    
    return JSON.stringify(jsonInfo);
};