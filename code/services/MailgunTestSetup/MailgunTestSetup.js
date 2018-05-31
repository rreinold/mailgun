
/**
 * This service ensures MailgunConstants are set.
 */
function MailgunTestSetup(req, resp){
        var isConfigured = function (constant) {
            return constant ? true : false
        }

        var errMessages = [];

        for (var property in MAILGUN_CONFIG) {
            if (MAILGUN_CONFIG.hasOwnProperty(property) && (!isConfigured(MAILGUN_CONFIG[property]))) {
                errMessages.push(property + " not set in MailgunConstants Library");
            }
        }

        if (errMessages) {
            resp.error(errMessages);
        }
        else {
            resp.success("All constants have been set successfully")
        }
}