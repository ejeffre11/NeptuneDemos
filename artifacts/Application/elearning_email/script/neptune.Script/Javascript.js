/**
 * Name: SendEmailGeneric
 * Description:
 *
 * Path: /SendEmail
 * Method: POST
 *
 * Body:
 * html
 * Description: HTML
 * idTemplate
 * Description: Template ID
 * subject
 * Description: Subject
 * toEmail
 * Description: Receiver
 * fromEmail
 * Description: Sender
 * attachments
 * Description: Attachments
 * cc
 * Description: CC
 * bcc
 * Description: BCC
 */
function sendMyEmail()
{
    var options = {
    data: {
        html: "",
        idTemplate: "667bc53d-ca7b-4f64-973f-636b75b269d7",
        subject: "",
        toEmail: "erik.jeffreys@neptune-software.com",
        //fromEmail: "",
        values: {},

        attachments: "",
        cc: "",
        bcc: "",
    },
    };

apiRestAPI(options);
}