// const {google} = require('googleapis');
//
// // Each API may support multiple version. With this sample, we're getting
// // v3 of the blogger API, and using an API key to authenticate.
// const blogger = google.blogger({
//     version: 'v3',
//     auth: 'AIzaSyCO0Ln31JE9DrfLI_5wxOBwBxSSICXi664'
// });
//
// const params = {
//     blogId: '3213900'
// };
//
// // get the blog details
// blogger.blogs.get(params, (err, res) => {
//     if (err) {
//         console.error(err);
//         throw err;
//     }
//     console.log(`The blog url is ${res.data.url}`);
// });
const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    771815263609-0f5in4lv0sqtl509dn4bbvf0b0eolgl7.apps.googleusercontent.com,
    K5z7Z3Ino25FPfGTtSEV5ujL,
    www.google.com
);

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
    'https://www.googleapis.com/auth/blogger',
    'https://www.googleapis.com/auth/calendar'
];

const url = oauth2Client.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: 'online',

    // If you only need one scope you can pass it as a string
    scope: scopes
});