/**
 * Send an email using Mailgun Library
 * 
 */
 function Example(req, resp){
    
    // Configuration comes from your account credentials on https://www.mailgun.com/
    
    // ex. 'key-abcdef01234567891234567890'
    var API_KEY=""
    // ex mg.yoursite.com
    var DOMAIN = ""
    // ex. origin@yoursite.com
    var ORIGIN_EMAIL = ""
    // ex. me@me.com
    var RECIPIENT_EMAIL = ""
    
    var mailgun = Mailgun(API_KEY, DOMAIN, ORIGIN_EMAIL)
    mailgun.send("Sample body","Mailgun IPM Package", RECIPIENT_EMAIL, function(err, data){
        if(err){
            resp.error(err)
        }
        resp.success(data)
    })
}