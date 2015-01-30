
var speakeasy = require("speakeasy");

console.log("Generate", speakeasy.generate_key({length: 20, google_auth_qr: true}));

var timing = [-60, -30, 0, 30, 60];

for (var i = 0; i < timing.length; i++) {
	console.log("TOPT-Key:", timimg[i], speakeasy.time({key: 'OUUGCKJOHRXC4NSFEFQU43DXPE6EMTCS', encoding: 'base32', initial_time: timing[i]}));
}