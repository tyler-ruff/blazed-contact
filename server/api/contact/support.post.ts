import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { v4 as uuidv4 } from 'uuid';

export default eventHandler(async (event) => {
    const body = await readBody(event);
    try {
        const parseBody = async () => {
            const { 
                firstName, lastName, 
                company, email, phoneNumber,
                message 
            } = body;
            const apiKey = process.env.SENDGRID_API_KEY;
            if (!apiKey) {
                console.error("Missing SendGrid Key");
                process.exit(1);
            }
            sgMail.setApiKey(apiKey);
            const ticketId = uuidv4();
            const emailMessage = {
                to: 'hello@blazed.space',
                from: 'noreply@blazed.space',
                subject: `New Support Ticket from ${firstName}`,
                text: `Support Ticket  \n
                    ID: ${ticketId} \n
                    Name: ${firstName} ${lastName} \n
                    Email: ${email} \n
                    Phone: ${phoneNumber} \n
                    Company: ${company} \n
                    -------------- \n
                    ${message}
                `,
            };
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