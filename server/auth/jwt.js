// const GoogleToken = require('gtoken');
// const gtoken = new GoogleToken({
//   keyfile: '../privateKey.json',
//   scope: [
//     'https://www.googleapis.com/auth/spreadsheets',
//     'https://www.googleapis.com/auth/drive',
//     'https://www.googleapis.com/auth/calendar'
//   ]
// });
//
// gtoken.getToken(function(err, token) {
//   console.log(err || token);
//   // gtoken.token value is also set
// });
// var google = require('googleapis');
//
// var key = require('/path/to/key.json');
// var jwtClient = new google.auth.JWT(
//   key.client_email,
//   null,
//   key.private_key,
//   ['https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/drive'], // an array of auth scopes
//   null
// );
//
// jwtClient.authorize(function(err, tokens) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   // Make an authorized request to list Drive files.
//   drive.files.list(
//     {
//       auth: jwtClient
//     },
//     function(err, resp) {
//       console.error(err);
//     }
//   );
// });
