const crypto = require('crypto');

function generate(){
	return crypto.randomBytes(32).toString('hex');;
}

module.exports.generate = generate;