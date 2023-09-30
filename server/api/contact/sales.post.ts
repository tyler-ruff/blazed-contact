import sgMail, { MailDataRequired } from "@sendgrid/mail";

export default eventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const parseBody = async () => {
            // Check Status
            //const email = body?.email;
            const { fieldName, email, message } = body;

            // Prepare SendGrid API
            const apiKey = process.env.SENDGRID_API_KEY;
            if (!apiKey) {
                console.error("Missing SendGrid Key");
                process.exit(1);
            }
            sgMail.setApiKey(apiKey);

            // Prepare Email
            const emailMessage = {
                to: 'hello@blazed.space',
                from: 'noreply@blazed.space',
                subject: `New Sales Inquiry from ${fieldName}`,
                text: `Sales Inquiry \n
                    Name: ${fieldName} \n
                    Email: ${email} \n
                    -------------- \n
                    ${message}
                `,
            };

            // Send Email
            sgMail.send(emailMessage).then(() => {
                // Here we log successful send requests
                console.info(`Message send success`)
            }).catch((err) => {
                // Here we log errored send requests
                console.error(err);
                console.error(`Message send failed`)
            });
        };
        parseBody();
    } catch (error) {
        console.error('Error processing form data:', error);
    }
});