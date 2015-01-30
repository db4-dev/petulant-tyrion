
var speakeasy = require("speakeasy");

console.log("Generate", speakeasy.generate_key({length: 20, google_auth_qr: true}));

console.log("TOPT-Key:", speakeasy.time({key: 'KY7TSZRWFZBXCMJGHRED6PDOPBSS4WCK', encoding: 'base32'}));