/**
 * Mailgun - Send emails via Mailgun REST API
 * https://documentation.mailgun.com/en/latest/api_reference.html
 * 
 * @typedef {Object} Mailgun
 * @param {string} apiKey - API Key found in Mailgun Console (https://www.mailgun.com/)
 * @param {string} domain - Domain ex. mg.yoursite.com, provided by Mailgun
 * @param {string} originEmail - origin address from which to send emails, provided by Mailgun
 * 
 * @example
 * var mgconf = MAILGUN_CONFIG;
 * var mailgun = Mailgun(mgconf.API_KEY, mgconf.DOMAIN, mgconf.ORIGIN_EMAIL);
 * 
 */
 function Mailgun(apiKey, domain, originEmail){
     
     if(!apiKey || !domain || !originEmail){
         throw new Error("Invalid configuration - must provide apiKey, domain, and originEmail. Can be acquired on Mailgun account home.")
     }
     /**
      * This method is used to send an email with subject and body and other components can be added. Refer to the mailgun api https://documentation.mailgun.com/en/latest/api-sending.html#sending
      * 
      * @memberof Mailgun
      * @param {string} body - the body of the email
      * @param {string} subject - the subject of the email
      * @param {string} recipient - the recipient of the email
      * 
      * @example
      * 
      * var mgconf = MAILGUN_CONFIG;
      * var mailgun = Mailgun(mgconf.API_KEY, mgconf.DOMAIN, mgconf.ORIGIN_EMAIL)
      * var body = "Sample body";
      * var subject = "Mailgun IPM Package";
      * var recipient = "Bob <bob@host.com>";
      * mailgun.send(body, subject, recipient, function(err, data){
      *     if(err){
      *         resp.error(err)
      *     }
      *     resp.success(data)
      * })
      */
     function send(body, subject, recipient, callback){
         
        var options = {
            auth: {
                user: "api",
                pass : apiKey
            },
            uri : "https://api.mailgun.net/v3/" + domain + "/messages",
            qs: {
                "from": originEmail,
                "to": formattedRecipient,
                "subject": subject,
                "text": body
            },
            strictSSL: false
        };
    
        var requestObject = Requests();
        requestObject.post(options,function(err,data){
            if(err){
                callback(err)
            }else{
                callback(data)
            }
        })
     }
     
     return {
         send
     }
     
 }

 /**
* This callback is displayed as part of this library.
* @callback callback
* @param {Object} err
* @param {Object} resp
*/