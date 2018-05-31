
/**
 * This service ensures MailgunConstants are set.
 */
function MailgunTestSetup(req, resp){
    
    function checkConstants() {
        var checkConstantEmpty = function (constant) {
            if (constant === "") {
                return true;
            } else {
                return false;
            }
        }
        
        var response = {
            err: false,
            messages: []
        };
    
        var sendResponse = function(){
            if (response.err){
                resp.error(response)
            }else{
                resp.success(response);    
            }
        };

    if (checkConstantEmpty(API_KEY)) {
        response.err = true;
        response.messages.push("API_KEY not set in MailgunConstants Library");
    }
    if (checkConstantEmpty(DOMAIN)) {
        response.err = true;
        response.messages.push("DOMAIN not set in MailgunConstants Library");
    }
    if (checkConstantEmpty(ORIGIN_EMAIL)) {
        response.err = true;
        response.messages.push("ORIGIN_EMAIL not set in MailgunConstants Library");
    }

    if (checkConstantEmpty(RECIPIENT_EMAIL)) {
        response.err = true;
        response.messages.push("RECIPIENT_EMAIL not set in MailgunConstants Library");
    }
    
    sendResponse();
        
    };
    
    checkConstants();
}