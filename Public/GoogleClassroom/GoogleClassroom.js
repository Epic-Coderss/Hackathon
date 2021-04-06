const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    771815263609-0f5in4lv0sqtl509dn4bbvf0b0eolgl7.apps.googleusercontent.com,
    K5z7Z3Ino25FPfGTtSEV5ujL,
    YOUR_REDIRECT_URL
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