/**
 * Send an email using Mailgun Library
 * https://documentation.mailgun.com/en/latest/api-sending.html#sending
 */
 function MailgunExampleSend(req, resp){

    // The constants needs to be setup in the MailgunConstants Library
    var mailgun = Mailgun(API_KEY, DOMAIN, ORIGIN_EMAIL)
    mailgun.send("Sample body","Mailgun IPM Package", RECIPIENT_EMAIL, function(err, data){
        if(err){
            resp.error(err)
        }
        resp.success(data)
    })
}