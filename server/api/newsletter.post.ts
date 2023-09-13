import client from "@sendgrid/client";
import { ClientRequest } from "@sendgrid/client/src/request";
import { validateEmail } from "~/utils/validate";

export default eventHandler((event) => {
    try {
        const parseBody = async () => {
           const body = await readBody(event);
           const email = body?.email;
           if(validateEmail(email)){
            console.log(email);
           } else {
            console.log("invalid email")
           }
        };
        parseBody();
      } catch (error) {
        console.error('Error processing form data:', error);
    }
    // Note: Completed API Request
    /*
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
        console.error("Missing SendGrid Key");
        process.exit(1);
    }
    client.setApiKey(apiKey);
    const data = {
        list_ids: ['c6b1ad3b-91ce-42fd-a5ff-de2d4f8fa9f0'],
        contacts: [
            {
                email: "tyler.ruff@aol.com"
            }
        ]
    };
    const apiRequest = {
        url: `/v3/marketing/contacts`,
        method: 'PUT',
        body: JSON.stringify(data)
    } as ClientRequest;
    client.request(apiRequest).then(([apiResponse, body]) => {
        console.log(apiResponse.statusCode);
        console.log(apiResponse.body);
      })
      .catch(error => {
        console.error(error);
      });
    */
});