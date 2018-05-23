/**
 * Send an email using Mailgun Library
 * https://documentation.mailgun.com/en/latest/api-sending.html#sending
 */
function MailgunExampleSend(req, resp) {

    // The constants needs to be setup in the MailgunConstants Library
    var mailgun = Mailgun(API_KEY, DOMAIN, ORIGIN_EMAIL)
    var body = "Sample body";
    var subject = "Mailgun IPM Package";
    var recipient = "Bob <bob@host.com>";
    mailgun.send(body, subject, recipient, function (err, data) {
        if (err) {
            resp.error(err)
        }
        resp.success(data)
    })
}