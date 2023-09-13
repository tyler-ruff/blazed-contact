import sgMail, { MailDataRequired } from "@sendgrid/mail";

export default eventHandler((event) => {
    try {
        const parseBody = async () => {
           const body = await readBody(event);
           // Note: Completed Email Send
           /*
            const apiKey = process.env.SENDGRID_API_KEY;
            if (!apiKey) {
                console.error("Missing SendGrid Key");
                process.exit(1);
            }
            sgMail.setApiKey(apiKey);
           const message = {
            to: 'hello@blazed.space',
            from: 'noreply@blazed.space',
            subject: 'Hello, world!',
            text: 'This is a test email from my TypeScript application.',
           };
           sgMail.send(message).then(() => {
                // Here we log successful send requests
                console.info(`Message send success`)
            }).catch((err) => {
                // Here we log errored send requests
                console.error(err);
                console.error(`Message send failed`)
            });
            */
           /*
           const email = body?.email;
           if(validateEmail(email)){
            console.log(email);
           } else {
            console.log("invalid email")
           }
           */
        };
        parseBody();
    } catch (error) {
        console.error('Error processing form data:', error);
    }
});